//O SKELETON É O FALLBACK: 
//Recurso visual do esqueleto do layout visível até que o real layout seja carregado, utilizamos o skeleton pq o layout normalmente depende de uma requisição e do seu callback para carregar os dados na tela.
//A única coisa que fazemos no Skeleton é definir o tamanho para os esqueletos!

import { Skeleton } from "@/components/ui/skeleton";

export const TabsSkeleton = () => {
    return(
        <div>
            <Skeleton className="w-full h-10 rounded-xl py-2"/>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {Array.from({ length: 8 }, (item, index) => (
                    <div key={index} className="mt-4 ">
                        <Skeleton className="w-full h-32 rounded-xl"/>             {/*skeleton da imagem */}
                        <Skeleton className="mt-1 w-full h-6 rounded-xl"/>    {/*skeleton nome do produto*/}
                        <Skeleton className="mt-1 w-20 h-5 rounded-xl"/>     {/*skeleton preço do produto*/}
                        <Skeleton className="mt-1 w-full h-7 rounded-xl"/>      {/*skeleton botão comprar*/}
                    </div>
                ))}

            </div>
        </div>
    );
}
