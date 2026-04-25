export default function ProductCard({ product }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden group shadow-[0_2px_12px_rgba(0,72,141,0.04)] hover:shadow-[0_8px_32px_rgba(0,72,141,0.08)] transition-shadow">
      {/* Image */}
      <div className="relative aspect-square bg-surface-container-low overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <span
            className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${product.badge === "Fresh"
              ? "bg-secondary"
              : product.badge === "Sale"
                ? "bg-red-500"
                : "bg-primary-container"
              }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3 lg:p-4">
        <p className="text-[11px] text-outline font-medium uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-on-surface mt-1 leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2.5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-secondary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-outline line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-[0_4px_12px_rgba(0,72,141,0.25)]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
