"use client";
import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}

//Construção do Schema
const formSchema = z.object({
    street: z.string().min(2, "Preencha o endereço"),
    number: z.string().min(2, "Preencha o número"),
    complement: z.string().optional(),
    district: z.string().min(2, "Preencha o bairro"),
    city: z.string().min(2, "Preencha a cidade"),
    state: z.string().min(2, "Preencha o estado"),

});

export const StepAddress = ({ setStep }: Props) => {

    //Chama o HOOK do Store do Dialog contendo as seguintes propriedades
    const { address, setAddress } = useCheckoutStore(state => state);

    //'z.infer' → transforma regras do 'formSchema' em tipo para form,
    //= “Meu formulário é tipado a partir do schema do Zod”
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),                           //passa o 'formSchema' para o resolver
        defaultValues: { ...address }
    });

    //= “onSubmit é tipado a partir do schema do Zod”
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setAddress(values);
        setStep("finish");
    }

    return(
        <FieldSet>
            <form onSubmit={form.handleSubmit(onSubmit)} >                              
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="endereco">Seu Endereço: </FieldLabel>

                            <div className="grid grid-cols-2 gap-5">  
                                <Input 
                                    id="endereco" 
                                    type="text" 
                                    placeholder="Rua: " 
                                    className="text-xs sm:text-base md:text-lg"
                                    {...form.register("street")}
                                />

                                <Input 
                                    id="number" 
                                    type="text" 
                                    placeholder="nº: " 
                                    className="text-xs sm:text-base md:text-lg"
                                    {...form.register("number")}
                                />

                                <Input 
                                    id="complement" 
                                    type="text" 
                                    placeholder="Complemento: " 
                                    className="text-xs sm:text-base md:text-lg"
                                    {...form.register("complement")}
                                />

                                <Input 
                                    id="district" 
                                    type="text" 
                                    placeholder="Bairro: " 
                                    className="text-xs sm:text-base md:text-lg"
                                    {...form.register("district")}
                                />

                                <Input 
                                    id="city" 
                                    type="text" 
                                    placeholder="Cidade: " 
                                    className="text-xs sm:text-base md:text-lg"
                                    {...form.register("city")}
                                />

                                <Controller
                                    control={form.control} 
                                    name="state" 
                                    render={({field}) => (
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger className="w-full text-xs sm:text-base md:text-lg">
                                                <SelectValue placeholder="Estado" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup >
                                                    <SelectItem value="poa" className="text-xs sm:text-base md:text-lg">Rio Grande do Sul</SelectItem>
                                                    <SelectItem value="fln" className="text-xs sm:text-base md:text-lg">Santa Catarina</SelectItem>
                                                    <SelectItem value="cwb" className="text-xs sm:text-base md:text-lg">Paraná</SelectItem>
                                                    <SelectItem value="sp" className="text-xs sm:text-base md:text-lg">São Paulo</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />              
                            
                            </div>

                            <FieldError />
                                
                        </Field>
                        
                    </FieldGroup>                

                <div className="flex justify-between mt-6">
                    <Button 
                        type="submit" 
                        variant="link" 
                        className="cursor-pointer"
                        onClick={() => setStep("user")}>
                        Voltar
                    </Button>

                    <Button type="submit" className="cursor-pointer ">
                        Próximo
                    </Button>
                </div>
                
            </form>            
        </FieldSet>
    );
}







