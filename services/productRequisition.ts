import { products } from "@/data/products";
import { Product } from "@/types/product";

//É esta função que fará a requisição dos dados!!
//Estou utilizando o 'setTimeout' apenas para retardar o retorno da Promisse, para simular uma requisição.
export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(products)
        }, 1000);
    });
}