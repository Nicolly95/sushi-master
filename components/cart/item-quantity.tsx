
import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/cart";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
    cartItem: Cart;
}

export const CartItemQuantity = ({ cartItem }: Props) => {

    //chama a função que controla a quantidade de itens!
    const { upsertCartItem } = useCartStore(state => state);

    const handlePlusButton = () => {
        upsertCartItem(cartItem.product, 1);
    }

    const handleMinusButton = () => {
        upsertCartItem(cartItem.product, -1);
    }

    return(
        <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="size-5 cursor-pointer" 
                onClick={handleMinusButton}>
                <MinusIcon className="size-3"/>            
            </Button> 
                     
                <div className="text-xs">{cartItem.quantity}</div>            

            <Button variant="outline" size="icon" className="size-5 cursor-pointer"
                onClick={handlePlusButton}>
                <PlusIcon className="size-3"/>            
            </Button>   
        </div>
    );
}







