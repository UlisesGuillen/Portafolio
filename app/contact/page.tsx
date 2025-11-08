export default function Contacto() {
    return (
    <section className="flex flex-col items-center justify-center py-20 px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contáctame</h1>
        <p className="text-gray-600 mb-10 text-center max-w-md">
        Si deseas ponerte en contacto conmigo, completa el siguiente formulario.
        Te responderé lo antes posible 🚀
        </p>

        <form
        action="https://formsubmit.co/ulisesguillendelcid@gmail.com"
        method="POST"
        className="w-full bg-white p-8 rounded-2xl shadow-md border border-gray-200"
        >
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
            Nombre
            </label>
            <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Tu nombre"
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
            Correo electrónico
            </label>
            <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="tucorreo@ejemplo.com"
            />
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="message">
            Mensaje
            </label>
            <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Escribe tu mensaje aquí..."
            ></textarea>
        </div>

        <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition"
        >
            Enviar mensaje
        </button>

        {/* Opcional: para redirigir después de enviar */}
        <input type="hidden" name="_next" value="https://tu-sitio.com/gracias" />
        <input type="hidden" name="_captcha" value="false" />
        </form>
    </section>
    );
}
