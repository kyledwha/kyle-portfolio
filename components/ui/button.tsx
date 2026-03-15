export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}