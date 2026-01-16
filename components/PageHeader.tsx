export default function PageHeader({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="space-y-4">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">Apropos – Estações de IA</p>
      <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title}
      </h1>
      <p className="text-lg text-neutral-200">{description}</p>
    </section>
  );
}
