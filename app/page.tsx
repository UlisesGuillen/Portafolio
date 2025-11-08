export default function Home() {
  return (
    <section className="flex items-center justify-between py-30 px-20">
      {/* Texto a la izquierda */}
      <div className="flex flex-col text-left">
        <h1 className="text-4xl font-bold mb-4">
          ¡Hola! Soy Ulises Guillén 👋
        </h1>
        <p className="max-w-xl text-gray-600">
          Desarrollador web enfocado en crear experiencias digitales simples, funcionales y atractivas.
        </p>
        <a
          href="/projects"
          className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Ver mis proyectos
        </a>
      </div>
      <div className="ml-10 px-20">
        <img
          src="/files/principal/avatar.png" 
          alt="Avatar"
          className="w-60 h-60 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
