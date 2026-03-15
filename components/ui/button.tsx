export function Button({ children, className = '', ...props }: any) {
  return (
    <button
      className={`px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}