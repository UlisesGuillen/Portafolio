const projects = [
    {
        title: "SingBridge",
        description: "App de traducción de Lengua de Señas Salvadoreña.",
        link: "#",
    },
    {
        title: "Canje Local",
        description: "Plataforma de trueque de servicios locales.",
        link: "#",
    },
];

export default function Projects() {
    return (
        <section className="p-10">
            <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                    <div key={i} className="border p-4 rounded-lg shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-gray-600">{p.description}</p>
                        <a href={p.link} className="text-primary mt-2 inline-block hover:underline">
                            Ver proyecto →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
