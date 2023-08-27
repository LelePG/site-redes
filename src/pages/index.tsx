import LinkDaLista from "@/components/LinkDaLista";
import lista from "@/data/Lista";
import Perfil from "@/components/Perfil";

export default function Main() {
    return (
        <div className="center-col h-screen">
            <div className="bg-white w-1/3 text-center p-8 rounded-2xl drop-shadow-lg center-col">
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
