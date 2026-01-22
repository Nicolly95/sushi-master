
export const Logo = () => {
    return(
        <div className="flex flex-col ">
            <div className="flex flex-col items-start ">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold cursor-pointer ">Sushi Master </span>
                <span className="text-sm sm:text-xl md:text-2xl mt-3 font-light italic text-muted-foreground/95 "> A Arte da Culinária Japonesa no Seu Prato </span>
            </div>

            <div className="mt-4 mb-5 w-full max-w-md">
                <p className="text-xs font-light leading-relaxed text-muted-foreground
                    md:text-sm ">
                    Descubra uma seleção exclusiva de peças artesanais, preparadas com peixes frescos e a técnica milenar dos grandes mestres. Uma jornada de sabores que começa agora. Escolha os seus favoritos e deixe o resto conosco.
                </p>
            </div>
            
        </div>
    );
}