export default function SectionDivider() {
  return (
    <div className="flex justify-center py-4" aria-hidden="true">
      <div className="w-48 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] via-40% via-[var(--color-accent-purple)] via-60% to-transparent opacity-40" />
    </div>
  );
}
