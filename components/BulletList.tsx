export default function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 text-neutral-100">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
