import { Logo } from "@/components/Logo";
import { ThemeToggle } from "./theme-toggle";
import { CartSideBar } from "./cart/sidebar";

export const Header = () => {
    return(
        <header className="flex flex-col mt-8 mb-5 mx-3 relative
            md:flex-row md:justify-between ">

            <div className="flex items-center gap-4 ">           
                <Logo />
            </div>
            <div className="absolute top-0 right-0 gap-1 justify-end items-end
                md:items-center ">
                    <div className=" flex flex-row gap-1">
                        <ThemeToggle />
                        <CartSideBar />
                    </div>                
            </div>
        </header>
    );
}
















