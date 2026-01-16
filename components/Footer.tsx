import Link from "next/link";

const footerLinks = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "/governanca", label: "Governança" },
  { href: "/contato", label: "Contato" },
  { href: "/changelog", label: "Changelog" }
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Apropos – Estações de IA. Todos os direitos reservados.</p>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
