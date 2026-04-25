import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/organisms/PageHeader";
import CartItem from "../components/molecules/CartItem";
import OrderSummary from "../components/organisms/OrderSummary";
import NavItem from "../components/atoms/NavItem";

const initialItems = [
  {
    id: 1,
    name: "Nike Air Max 270",
    details: "Size: 10 | Color: Red",
    price: 150.0,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Sony WH-1000XM4",
    details: "Color: Black",
    price: 348.0,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Ember Smart Mug 2",
    details: "10 oz | White",
    price: 129.95,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop",
  },
];

const TAX_RATE = 0.085;

function Cart() {
  const [items, setItems] = useState(initialItems);

  const handleIncrease = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-surface font-sans pb-20 lg:pb-0">
      <PageHeader
        title="Cart"
        actions={
          <button className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </button>
        }
      />

      <main className="px-5 lg:px-8 xl:px-12 max-w-7xl mx-auto mt-4 lg:mt-6">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="lg:grid lg:grid-cols-5 xl:grid-cols-3 lg:gap-8">
            {/* Items list */}
            <div className="lg:col-span-3 xl:col-span-2">
              <h2 className="text-lg lg:text-xl font-bold text-on-surface">
                Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
              </h2>

              <div className="mt-4 divide-y divide-surface-container-high">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onRemove={handleRemove}
                  />
                ))}
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-2 xl:col-span-1 mt-6 lg:mt-0 lg:sticky lg:top-20 lg:self-start">
              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
              />

              <button className="w-full mt-5 py-3.5 lg:py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold text-sm lg:text-base flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_8px_32px_rgba(0,72,141,0.25)] cursor-pointer">
                Proceed to Checkout
              </button>

              <p className="text-center text-xs text-outline mt-3 flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Secure Checkout
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Bottom navigation - mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-surface-container-lowest/90 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-around py-2">
          <NavItem icon="home" label="Home" />
          <NavItem icon="search" label="Search" />
          <NavItem icon="cart" label="Cart" active badge={totalItems} />
          <NavItem icon="profile" label="Profile" />
        </div>
      </nav>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center mb-5">
        <svg className="w-10 h-10 text-outline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.002-.881 1.745-1.97l-1.655-7.03H5.25" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-on-surface">Your cart is empty</h3>
      <p className="text-sm text-on-surface-variant mt-1">
        Start adding products to your cart
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2.5 rounded-full bg-primary-container text-on-primary text-sm font-semibold hover:opacity-90 transition-all"
      >
        Browse Products
      </Link>
    </div>
  );
}

export default Cart;
