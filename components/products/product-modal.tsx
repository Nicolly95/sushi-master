"use client";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";


type Props = {
    open: boolean,
    onOpenChange: (open: boolean) => void,
    item: {
        name: string;
        description: string;
    }
}

export const ProductModal = ({ open, onOpenChange, item }: Props) => {

    return( 

        <Dialog open={open} onOpenChange={onOpenChange} >
            <DialogContent className="max-w-96 [&_button]:cursor-pointer">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">{item.name}</DialogTitle>
                </DialogHeader>

                <p className="text-muted-foreground">{item.description}</p>

            </DialogContent>
        </Dialog>

    );
}