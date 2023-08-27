import LinkDaLista from "@/model/LinkDaLista";

export default function LinkDaLista(props: LinkDaLista) {
    return (
        <li className="p-3 rounded-2xl mt-2 hover:bg-slate-100 font-semibold text-dark border-2 border-blue1 bg-white">
            <a
                href={props.url}
                className={` flex justify-center items-center gap-4 ${props.classname}`}
                target="_blank"
                rel="noopener"
            >
                <img src={props.icone} alt={props.alt} className="w-6"></img>
                {props.texto}
            </a>
        </li>
    );
}
