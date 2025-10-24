export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold mb-4">¡Hola! Soy Ulises Guillén 👋</h1>
      <p className="max-w-xl text-gray-600">
        Desarrollador web enfocado en crear experiencias digitales simples, funcionales y atractivas.
      </p>
      <a
        href="/projects"
        className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Ver mis proyectos
      </a>
    </section>
  );
}
