import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GenerateMessage } from "@/lib/generate-message";

export const StepFinish = () => {

    //recupera o Store do Dialog contendo os dados do usuario
    const { name } = useCheckoutStore(state => state);

    const message = GenerateMessage();
    const linkWpp = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WPP}&text=${encodeURIComponent(message)}`;

    return(
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong> !</p>
            <p className="text-sm font-light text-muted-foreground">Agora envie o seu pedido ao nosso WhatsApp para concluir. <br/>
               Nosso atendente irá te guiar sobre atualizações do seu pedido.
            </p>

            <Button asChild >
                <Link href={linkWpp}
                    target="_blank">
                    Enviar para o WhatsApp
                </Link>
            </Button>
        </div>
    );
}


















































