import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-dark text-white">
      <h1 className="text-xl font-bold">Ulises Guillén</h1>
      <div className="space-x-4">
        <Link href="/">Inicio</Link>
        <Link href="/about">Sobre mí</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/contact">Contacto</Link>
        <Link href="/certificaciones">Certificaciones</Link>
      </div>
    </nav>
  );
}
