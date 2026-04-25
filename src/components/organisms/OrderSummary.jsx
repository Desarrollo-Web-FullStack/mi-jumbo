export default function OrderSummary({ subtotal, shipping, tax, total }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-5 lg:p-6 shadow-[0_2px_12px_rgba(0,72,141,0.04)]">
      <h3 className="text-base lg:text-lg font-bold text-on-surface mb-4">
        Order Summary
      </h3>

      <div className="space-y-3">
        <SummaryRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
        <SummaryRow
          label="Shipping"
          value={shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          valueClassName={shipping === 0 ? "text-secondary font-medium" : ""}
        />
        <SummaryRow label="Estimated Tax" value={`$${tax.toFixed(2)}`} />

        <div className="border-t border-surface-container-high my-1" />

        <div className="flex items-center justify-between pt-1">
          <span className="text-base lg:text-lg font-bold text-on-surface">Total</span>
          <span className="text-lg lg:text-xl font-bold text-on-surface">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, valueClassName = "" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-on-surface-variant">{label}</span>
      <span className={`text-sm text-on-surface ${valueClassName}`}>{value}</span>
    </div>
  );
}
