//ZUSTAND:
//- Biblioteca para gerenciamento de Storages: carrinhos, checkout, produtos, etc...
//- Store: Centraliza e disponibiliza dados de estado que podem ser acessados e gerenciados por varios componentes da aplicação.
import { create } from "zustand";

//Armazena os dados:
type States = {
    name: string;
    address: {
        street: string;
        number: string;
        complement?: string | undefined;
        district: string;
        city: string;
        state: string;
    }
}

//Ações que o hook fará:    (adicionar nome e adicionar endereço)
type Actions = {
    setName: (name: States["name"] ) => void;
    setAddress: (address: States["address"] ) => void;
}

//Dados iniciais do Store do Dialog:
const initialState: States = {
    name: "",
    address: {
        street: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        state: ""
    }
}


//CRIA A STORE do Dialog que armazena estados e ações, como um HOOK:
export const useCheckoutStore = create<States & Actions>()(set => ({
    ...initialState,
    setName: (name) => set(state => ({ ...state, name })),
    setAddress: (address) => set(state => ({ ...state, address }))
}));


















