//ZUSTAND:
//- Biblioteca para gerenciamento de Storages (carrinhos de compras), ou qualquer tipo de informação que necessita ser compartilhada entre componentes: carrinhos, checkout, produtos, etc...
//- Store: Centraliza e disponibiliza dados de estado que podem ser acessados e gerenciados por varios componentes da aplicação.

import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { create } from "zustand";

//Armazena os dados:
type States = {
    cart: Cart[];
}

//Ações: Adiciona itens no carrinho E Atualiza itens do carrinho (update+insert = "upsert")
//Aqui ficam as ações, ou seja, as funções que alteram o estado, as funções sao definidas abaixo, no hook.
type Actions = {
    upsertCartItem: (product: Product, quantity: number) => void;
}

//Dados iniciais do Store do carrinho:
const initialStates: States = {
    cart: []
}

//CRIA A STORE que armazena estados e ações, como um HOOK:
//'create<States & Actions>()': A store vai ter estado + ações.
//'set' Função do Zustand usada para atualizar o estado.
//O retorno é um objeto que define: os estados e as ações.
export const useCartStore = create<States & Actions>()(set => ({
    ...initialStates,
    upsertCartItem: (product, quantity) => set(state => {
        let newCart = state.cart;

        let productIndex = newCart.findIndex(                       //verifica se o item existe no carrinho
            (item) => item.product.id === product.id
        );

        if (productIndex < 0) {                                          //se o item nao existe no carrinho,
            newCart.push({ product, quantity: 0 });                //adiciona novo produto com qntidade zero
            
            productIndex = newCart.findIndex((item) => item.product.id === product.id ); 
            //para saber em qual posição do cart o item está!
        }   //"Me diga em que posição do carrinho está o produto que tem esse id."

        newCart[productIndex].quantity += quantity;                         //atualiza a quantidade do item

        if (newCart[productIndex].quantity <= 0) {                 //se a quantidade do item for <= a zero,
            newCart = newCart.filter((item) => item.product.id !== product.id);             //remove o item
        }   //retorna todos os itens menos o que o ID for diferente

        return { ...state, cart: newCart }
        //Retorna o estado antigo e substitui apenas o cart
    })
}));



















