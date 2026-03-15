export function Card({ children, className = "", ...props }: any) {
  return (
    <div
      className={`rounded-2xl border border-gray-800 bg-gray-900 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: any) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}