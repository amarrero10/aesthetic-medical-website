export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-6 py-2 font-medium  transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
