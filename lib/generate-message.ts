import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store"

export const GenerateMessage = () => {

    //Recupera os dados do Store do Checkout
    const { name, address } = useCheckoutStore(state => state);

    //Recupera o Store do Carrinho
    const { cart } = useCartStore(state => state);

    const orderProducts = [];
    for(const item of cart) {                //percorre os itens de cart
        orderProducts.push(`${item.product.name} - ${item.quantity}`);  
    }   //vai preenchendo o array dos pedidos

    return `** Dados do Cliente: **
Nome: ${name}
Endereço: ${address.street}, nº ${address.number} (${address.complement}). ${address.city} - ${address.district} / ${address.state}
-----------------------------
** Dados do Pedido: **
${orderProducts.join("\n")}`;
}

