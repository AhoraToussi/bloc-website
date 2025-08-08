export function Button({ children, className }) {
  return (
    <button className={`rounded-2xl bg-orange-500 hover:bg-orange-600 font-semibold ${className}`}>
      {children}
    </button>
  );
}