"use client";
import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button";


//ZOD: Esquema de Validação de formulários
//React-Hook-Form: Controla o formulário (estado, submit, erros, registro dos inputs)

//Hook-Form/Resolver: É o adaptador / ponte entre o react-hook-form e o ZOD, 
// ele lê o schema do Zod, traduz os erros, entrega tudo no formato que o React Hook Form entende.
// O resolver é uma dependência do React Hook Form, mas depende do Zod para funcionar.


type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}

//Construção do Schema
const formSchema = z.object({
    name: z.string().min(2, "Preencha seu nome")
});

export const StepUser = ({ setStep }: Props) => {

    //Chama o HOOK do Store do Dialog contendo as seguintes propriedades
    const { name, setName } = useCheckoutStore(state => state);

    //'z.infer' → transforma regras do 'formSchema' em tipo para form,
    //= “Meu formulário é tipado a partir do schema do Zod”
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),                           //passa o 'formSchema' para o resolver
        defaultValues: { name }
    });

    //= “onSubmit é tipado a partir do schema do Zod”
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setName(values.name);
        setStep("address");
    }

    return(
        <FieldSet>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="name">Nome completo: </FieldLabel>
                        <Input 
                            id="name" 
                            type="text" 
                            placeholder="Digite o seu nome completo: " 
                            autoFocus
                            className="text-xs sm:text-base md:text-lg"
                            {...form.register("name")}
                        />

                        <FieldError />
                            
                    </Field>
                    
                </FieldGroup>

                <Button type="submit" className="cursor-pointer mt-6">
                    Próximo
                </Button>
            </form>            
        </FieldSet>
    );
}
























