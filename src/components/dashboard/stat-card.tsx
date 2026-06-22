type StatProps = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: StatProps) {
  return (
    <div className="surface p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}
