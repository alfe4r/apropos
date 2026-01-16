import Link from "next/link";

const navItems = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "/estacoes", label: "Estações" },
  { href: "/governanca", label: "Governança" },
  { href: "/para-quem", label: "Para quem" },
  { href: "/ecossistema", label: "Ecossistema" },
  { href: "/nao-e", label: "Não é" },
  { href: "/contato", label: "Contato" }
];

export default function Navbar() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Apropos – Estações de IA
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-neutral-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
