import LinkDaLista from "@/components/LinkDaLista";
import lista from "@/data/Lista";
import Perfil from "@/components/Perfil";

export default function Main() {
    return (
        <div className="center-col min-h-screen min-w-fit ">
            <div className={`bg-white center-col drop-shadow-lg rounded-md md:rounded-2xl text-center
            p-3 md:p-8 sm:m-3 md:m-8 max-w-screen-md 
            `}
            >
                <Perfil />
                <ul className="w-full">
                    {lista.map((link) => (
                        <LinkDaLista
                            texto={link.texto}
                            key={link.texto}
                            alt={link.alt}
                            url={link.url}
                            icone={link.icone}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
