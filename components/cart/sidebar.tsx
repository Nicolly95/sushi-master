import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "./item";
import { useState } from "react";
import { CheckoutDialog } from "@/components/checkout/dialog";

export const CartSideBar = () => {

    //'checkoutOpen' é o estado para controlar se o Dialog está aberto ou fechado
    const [checkoutOpen, setCheckoutOpen] = useState(false);

    const { cart } = useCartStore(state => state);

    let subtotal = 0;
    for(const item of cart) {
        subtotal += item.quantity * item.product.price;
    }

    return(
        <div>
            <Sheet >
                <SheetTrigger asChild >
                    <Button variant="outline" className="h-8 sm:h-8 md:h-9 md:py-4  cursor-pointer ">
                        <RocketIcon className="mr-0 size-3 md:mr-1 md:size-5 "/>
                        <p className="text-sm md:text-lg py-0 ">Carrinho</p>
                        {cart.length > 0 &&
                            <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
                        }
                    </Button>
                </SheetTrigger>
                <SheetContent className="px-2 py-4 md:p-4 [&_button]:cursor-pointer ">
                    <SheetHeader className="mt-2 p-0">
                        <SheetTitle className="py-0 ">Carrinho</SheetTitle> 
                        <SheetDescription className="sr-only">
                            Este é o seu carrinho de compras, onde você pode revisar os itens antes de finalizar a compra.
                        </SheetDescription>                   
                    </SheetHeader>  
                    
                    <div className="flex flex-col gap-5 my-3 ">
                        {cart.map((item) => (
                            <CartItem key={item.product.id} item={item} />
                        ))}
                        
                    </div>

                    <Separator />

                    <div className="flex justify-between items-center text-xs ">
                       <div>Subtotal: </div>
                       <div className="font-bold"> R$ {subtotal.toFixed(2)}</div>
                    </div>

                    <Separator className="mb-3"/>

                    <div className="text-center">
                       <Button className="cursor-pointer"
                            onClick={() => setCheckoutOpen(true)}   //abre o 'checkoutOpen'
                            disabled={cart.length === 0}>
                            Finalizar Compra
                        </Button>
                    </div>

                    <CheckoutDialog 
                        open={checkoutOpen}                 //passa o estado do 'checkoutOpen' para o 'open'
                        onOpenChange={setCheckoutOpen}      //passa true/false para o 'onOpenChange' 
                    />  

                </SheetContent>
            </Sheet>
        </div>
    );
}















