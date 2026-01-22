import { Separator } from "@/components/ui/separator";

export const Footer = () => {
    return(
        <footer className="mt-3 h-10 w-full flex flex-col justify-center items-center">
            <Separator />
            
            <div className="text-center text-xs md:text-sm text-muted-foreground p-2">
                created by<span className="mx-2 text-foreground ">
                    nicolly kingeski 
                </span> 

                <a href="https://github.com/Nicolly95" target="_blank"
                    className="hover:text-foreground transition mr-2">
                gitHub
                </a> 
                
                <a href="https://www.linkedin.com/in/nicolly-k-0b0241160/?profileId=ACoAACZ6Y0QBe5-nPWNn3Ax3JjOqbnXo46SPBXM" target="_blank"
                    className="hover:text-foreground transition">
                linkedIn
                </a>
            </div>
        </footer>
    );
}