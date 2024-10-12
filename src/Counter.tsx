export function Counter({ value, onChange }: { value: number; onChange?: (value: number) => void }) {
  return (
    <div className="flex items-center gap-4">
      <button
        className="rounded border border-solid border-red-400 bg-red-300 px-4 py-2"
        onClick={() => onChange?.(value - 1)}
      >
        Decrement
      </button>
      <h3 className="w-20 text-center text-2xl font-bold">{value}</h3>
      <button
        className="rounded border border-solid border-green-400 bg-green-300 px-4 py-2"
        onClick={() => onChange?.(value + 1)}
      >
        Increment
      </button>
    </div>
  );
}
