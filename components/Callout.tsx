export default function Callout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <aside className="rounded-2xl border border-accent/40 bg-neutral-950/70 p-6 text-sm text-neutral-100 shadow-[0_0_0_1px_rgba(56,189,248,0.2)]">
      {children}
    </aside>
  );
}
