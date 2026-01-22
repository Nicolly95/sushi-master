"use client";
import { Header } from "@/components/Header";
import { TabsSkeleton } from "@/components/products/skeleton";
import { ProductsTab } from "@/components/products/tab";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";

//PASSO A PASSO INSTALAÇÃO NOVO PROJETO:
//1º Criar a estrutura do projeto Next
//2º Instalar a biblioteca Shadcn-UI
//3º Habilitar o suporte a temas / DarkMode: https://ui.shadcn.com/docs/dark-mode

//SOBRE OS COMPONENTES UTILIZADOS:
//'Suspense' permite a exibição de um estado de carregamento (fallback = skeleton) enquanto um componente assíncrono (ProductsTab) não retorna.
//'Skeleton' é o esqueleto do layout que aparece até receber os dados da requisição e exibir os produtos.
//'Tabs' é o responsável por fazer a requisição e exibir os dados na tela.

const Page = () => {
  return(
    <>
      <div className="min-h-screen flex flex-col py-0">

        <div className="flex-1 w-full max-w-4xl mt-0 mx-auto ">
          
          <Header />

          <div className="mx-3">
            <Suspense fallback={<TabsSkeleton />}>
              <ProductsTab />
            </Suspense>
          </div>        
        </div>

        <Footer />

      </div>     

    </>
  );
}

export default Page;

//DICAS LAYOUT GEMINI:
//Título do Card: Use font-semibold para o Nome do Prato.
//Descrição: Use text-xs text-muted-foreground leading-snug para que a descrição fique discreta e elegante abaixo do nome.











