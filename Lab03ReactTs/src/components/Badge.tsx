type BadgeProps = {
  title: string;
  children: React.ReactNode;
  tone: string;
};

export function Badge({ title, children, tone }: BadgeProps) {
  return (
    <div>
      <strong>{title}</strong>
      <span>{children}</span>
      <span>{tone}</span>
    </div>
  );
}