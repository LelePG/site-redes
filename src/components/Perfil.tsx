export default function Perfil() {
    const nome = "Letícia Pegoraro Garcez";
    const descricao = `Engenheira de Computação, professora na Cod3r, coordenadora e podcaster na comunidade Feministech,
    embaixadora do programa Women Techmakers, co-organizadora do GDG Pelotas e criadora de vários
    repositórios com projetos legais no Github.`;
    const caminhoFoto = "/perfil.jpg";
    return (
        <div className="center-col text-dark">
            <img src={caminhoFoto} alt="Profile" className=" w-32 h-32 md:w-48 md:h-48 rounded-full mb-4" />
            <h1 className=" text-2xl md:text-3xl font-bold mb-2 ">{nome}</h1>
            <p className=" mb-4 text-center font-medium">{descricao}</p>
        </div>
    );
}
