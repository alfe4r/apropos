export default function ContentSection({
  children
}: {
  children: React.ReactNode;
}) {
  return <section className="space-y-6 text-base leading-relaxed text-neutral-200">{children}</section>;
}
