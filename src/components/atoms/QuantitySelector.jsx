export default function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-0.5">
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="w-8 h-8 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
      <span className="w-8 text-center text-sm font-semibold text-on-surface">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="w-8 h-8 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-surface-container transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  );
}
