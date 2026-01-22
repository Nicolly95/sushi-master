"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepUser } from "./step-user";
import { StepAddress } from "./step-address";
import { StepFinish } from "./step-finish";
import { CheckoutSteps } from "@/types/checkout-steps";


type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;                      //controla a abertura e fechamento do Dialog
}

//GERENCIA AS ETAPAS DO DIALOG!
export const CheckoutDialog = ({ open, onOpenChange }: Props) => {

    const [step, setStep] = useState<CheckoutSteps>("user");

    let progressPct = 0;
    switch(step) {
        case "user":
            progressPct = 34;
            break;
        case "address":
            progressPct = 70;
            break;
        case "finish":
            progressPct = 100;
            break;
    }

    return(
        <Dialog open={open} onOpenChange={onOpenChange} >
            <DialogContent 
                onPointerDownOutside={(e) => e.preventDefault()}
                onEscapeKeyDown={(e) => e.preventDefault()}
            >
                <DialogHeader >
                    <DialogTitle>
                        {step === "user" && "Dados Pessoais: "}
                        {step === "address" && "Endereço de entrega: "}
                        {step === "finish" && "Enviar dados do pedido para WhatsApp"}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct}/>

                <div className="flex flex-col gap-3 ">
                    {step === "user" && <StepUser setStep={setStep}/>}
                    {step === "address" && <StepAddress setStep={setStep}/>}
                    {step === "finish" && <StepFinish />}
                </div>
            </DialogContent>

        </Dialog>
    );
}









