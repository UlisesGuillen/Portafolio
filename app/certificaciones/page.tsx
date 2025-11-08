import Image from "next/image";

type Certis = {
    title: string;
    description: string;
    link: string;
    image: string;
};

const certifications: Certis[] = [
    {
    title: "Certificación de Excel",
    description:
        "Certificación en Microsoft Excel, enfocada en manejo de tablas y manejo de datos.",
    link: "#",
    image: "/files/certificaciones/ExcelCerti.png",
    },
    {
    title: "Certificación de Python",
    description:
    "Curso básico de Python centrado en el análisis de datos y fundamentos de desarrollo web.",
    link: "#",
    image: "/files/certificaciones/PythonCerti.png",
    },
];

export default function Certificaciones() {
    return (
        <section className="p-10 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Certificaciones</h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certi, index) => (
            <div
            key={index}
            className="bg-black rounded-2xl shadow hover:shadow-xl transition border border-gray-200 overflow-hidden"
                >
            <div className="relative w-full h-48">
                <Image
                    src={certi.image}
                    alt={certi.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Contenido del proyecto */}
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{certi.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{certi.description}</p>
            <div>
                <a
                    href={certi.link}
                    target="https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&format=pdf&id=499"
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                    Ver Certificación →
                </a>
            </div>
            </div>
            </div>
        ))}
        </div>
    </section>
    );
}