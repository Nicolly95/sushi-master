"use client"
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cart-store";
import { useState } from "react";
import { ProductModal } from "./product-modal";


type Props = {
    item: Product;
}

export const ProductItem = ({ item }: Props) => {

    const { upsertCartItem } = useCartStore(state => state);

    const [ open, setOpen ] = useState(false);

    const handleAddButton = ()=> {
        upsertCartItem(item, 1)
        toast.success("Adicionado ao carrinho!", {
            description: item.name,
            action: {
                label: "Fechar",
                onClick: () => {
                    toast.dismiss();
                },
            },
        });
    }

    const openModalDuration = () => {
        setOpen(true);

        setTimeout(() => {
            setOpen(false);
        }, 8000);
    }


    return(
        <div className="w-full max-w-4xl text-center my-4">
            <div className="rounded-md overflow-hidden">   
                {/* exibição da imagem */}
                <img src={item.image} alt={item.name} 
                    className="w-full h-32 object-cover cursor-pointer text-foreground hover:opacity-40 transition"
                    onClick={openModalDuration}
                />

                <ProductModal
                    open={open}
                    onOpenChange={setOpen}
                    item={item}
                />
            </div>

            <div className="mt-1 flex flex-col gap-1">                   
                <p className="text-xs sm:text-sm lg:text-base font-semibold leading-tight">
                    {item.name}
                </p>               
                <p className="text-xs sm:text-sm lg:text-base leading-tight opacity-60 font-bold"> 
                    R$ {item.price.toFixed(2)} 
                </p>          
                <Button 
                    variant="outline"
                    className="cursor-pointer h-7 md:h-8"
                    onClick={handleAddButton}>
                    Adicionar
                </Button>
            </div>
        </div>
    );
}























