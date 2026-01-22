
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/productRequisition";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./Item";
import { TabsSkeleton } from "./skeleton";

//Em ProductsTab mostrará o resultado da requisição feita pelo 'getAllProducts' e carregar os dados na tela!
//Cada Tab deve ter um Trigger e um Conteúdo listados dinamicamente com map().

type Tab = {        //o tipo para uma Tab
    title: string;
    value: string;
    products: Product[];
}

export const ProductsTab = () => {

    const [ products, setProducts ] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getAllProducts()
            .then((data) => {
            setProducts(data)
            })
            .catch((error) => {
                console.error("Erro.", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    const tabs: Tab[] = [                          //cria o array de tabs para que elas possam ser mapeadas
        {
            title: "Sushi",
            value: "sushi",
            products: products.filter((item) => item.category === "sushi")
        },
        {
            title: "Temaki",
            value: "temaki",
            products: products.filter((item) => item.category === "temaki")
        },
        {
            title: "Combinados",
            value: "pack",
            products: products.filter((item) => item.category === "pack")
        },
        {
            title: "Bebidas",
            value: "beverage",
            products: products.filter((item) => item.category === "beverage")
        }
    ]

    if(loading) {
        return <TabsSkeleton />
    }

    return(
        <Tabs defaultValue="sushi" >
           
           {/* 1º loop cria os triggers */}
            <TabsList className="flex w-full max-w-4xl h-auto">                    
                {tabs.map((item) => (
                    <TabsTrigger key={item.value} value={item.value} className="flex-1 py-2 hover:outline cursor-pointer">
                        {item.title}
                        
                    </TabsTrigger>
                ))}
            </TabsList>

            {/* 2º loop cria o conteúdo de cada tab, correlacionando pelos values*/}
            {tabs.map((item) => (
                <TabsContent key={item.value} value={item.value} className="my-1">
                    
                    {/* RENDERIZAÇÃO CONDICIONAL */}

                    {loading && <TabsSkeleton />}

                    {!loading && item.products.length > 0 &&
                        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {item.products.map((product) => (
                                <ProductItem key={product.id} item={product}/>
                            ))}
                        </div>
                    }                   

                 
                    {!loading && item.products.length === 0 && <ProductEmpty />}

                </TabsContent>
            ))}
            
        </Tabs>
    );
}























