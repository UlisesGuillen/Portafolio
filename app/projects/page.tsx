// app/projects/page.tsx

import Image from "next/image";

type Project = {
    title: string;
    description: string;
    link: string;
    image: string;
};

const projects: Project[] = [

    {
        title: "Certificación de Excel",
        description: "Certificación profesional en Microsoft Excel, enfocada en automatización de tareas, análisis de datos y creación de dashboards interactivos.",
        link: "#",
        image: "/projects/excel.png",
    },
    {
        title: "Certificación de Python",
        description: "Curso avanzado de Python centrado en la resolución de problemas reales, análisis de datos y fundamentos de desarrollo web.",
        link: "#",
        image: "/projects/python.png",
    },
    {
        title: "Fashion Houses",
        description: "Proyecto realizado para hackton en el Centro Empresarial ¡Supérate! Hilasal.",
        link: "#",
        image: "/projects/files/FashionHouses.png",
    },
];

export default function Projects() {
    return (
        <section className="p-10 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Proyectos</h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-black rounded-2xl shadow hover:shadow-xl transition border border-gray-200 overflow-hidden"
                    >
                        {/* Imagen del proyecto */}
                        <div className="relative w-full h-48">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Contenido del proyecto */}
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                            <div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    Ver proyecto →
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
