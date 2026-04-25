import QuantitySelector from "../atoms/QuantitySelector";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const lineTotal = item.price * item.quantity;

  return (
    <div className="flex gap-4 py-4">
      {/* Product image */}
      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl bg-surface-container-low overflow-hidden shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-sm lg:text-base font-semibold text-on-surface truncate">
              {item.name}
            </h3>
            {item.details && (
              <p className="text-xs text-outline mt-0.5">{item.details}</p>
            )}
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="p-1.5 text-outline hover:text-red-500 transition-colors shrink-0 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={() => onIncrease(item.id)}
            onDecrease={() => onDecrease(item.id)}
          />
          <span className="text-sm lg:text-base font-bold text-on-surface">
            ${lineTotal.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
