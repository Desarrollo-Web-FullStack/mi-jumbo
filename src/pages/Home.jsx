import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../back/auth"

const categories = [
  "All",
  "Groceries",
  "Electronics",
  "Home & Living",
  "Beauty",
  "Toys",
];

const products = [
  {
    id: 1,
    name: "Organic Hass Avocados, Pack of 4",
    price: 4.99,
    category: "Groceries",
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Nike Air Zoom Pegasus 39 Men's",
    price: 120.0,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Apple Watch Series 8 GPS 41mm",
    price: 349.0,
    originalPrice: 399.0,
    category: "Electronics",
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Premium Whole Bean Espresso Roast 1kg",
    price: 24.5,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Hydrating Hyaluronic Acid Serum 30ml",
    price: 32.0,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Monstera Deliciosa - Medium Pot",
    price: 45.0,
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5 Noise Cancelling",
    price: 348.0,
    category: "Electronics",
    badge: "Safe Work",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Artisan Sourdough Loaf",
    price: 6.5,
    category: "Groceries",
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
  },
];

function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const myLogout = async () => {
    await logout();
    navigate("/iniciar-sesion")
  }

  return (
    <div className="min-h-screen bg-surface font-sans pb-20 lg:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur-xl">
        <div className="px-5 pt-4 pb-3 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-primary-container"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 7h16v2H4zm0 4h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6zm2-6h12l1 2H5l1-2z" />
                <rect x="9" y="1" width="6" height="3" rx="1" />
              </svg>
              <span className="text-primary-container font-semibold text-lg">
                Mi Jumbo
              </span>
            </div>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-primary-container">
                Home
              </Link>
              <Link to="/deals" className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">
                Deals
              </Link>
              <Link to="/orders" className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">
                Orders
              </Link>
            </nav>

            {/* Desktop cart & profile */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="relative p-2 text-on-surface-variant hover:text-on-surface transition-colors" onClick={myLogout}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.002-.881 1.745-1.97l-1.655-7.03H5.25" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-secondary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-sm font-semibold">
                U
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="mt-3 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search products, brands and categories"
              className="w-full pl-12 pr-4 py-3 lg:py-3.5 rounded-full bg-surface-container-high text-on-surface placeholder:text-outline text-sm focus:outline-none focus:ring-2 focus:ring-primary-container/30 transition-all"
            />
          </div>

          {/* Categories */}
          <div className="mt-3 -mx-5 px-5 lg:mx-0 lg:px-0 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 pb-1 w-max lg:w-auto lg:flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${activeCategory === cat
                    ? "bg-primary-container text-on-primary shadow-[0_4px_16px_rgba(0,72,141,0.2)]"
                    : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="px-5 lg:px-8 xl:px-12 max-w-7xl mx-auto mt-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg lg:text-xl font-bold text-on-surface">
            Recommended for you
          </h2>
          <button className="text-sm text-primary-container font-medium hover:underline">
            See all
          </button>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-on-surface-variant text-sm">
              No products found in this category.
            </p>
          </div>
        )}
      </main>

      {/* Bottom navigation - mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-surface-container-lowest/90 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-around py-2">
          <NavItem icon="home" label="Home" active />
          <NavItem icon="search" label="Search" />
          <NavItem icon="cart" label="Cart" badge={3} />
          <NavItem icon="profile" label="Profile" />
        </div>
      </nav>
    </div>
  );
}

function ProductCard({ product }) {
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

function NavItem({ icon, label, active, badge }) {
  const icons = {
    home: (
      <svg className="w-6 h-6" fill={active ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.5}>
        {active ? (
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 01-.53 1.28h-1.44v7.44a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5h-3v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-7.44H2.31a.75.75 0 01-.53-1.28l8.69-8.69z" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        )}
      </svg>
    ),
    search: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    cart: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.002-.881 1.745-1.97l-1.655-7.03H5.25" />
      </svg>
    ),
    profile: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  };

  return (
    <button className={`flex flex-col items-center gap-0.5 px-4 py-1 ${active ? "text-primary-container" : "text-outline"}`}>
      <div className="relative">
        {icons[icon]}
        {badge && (
          <span className="absolute -top-1.5 -right-2.5 w-4.5 h-4.5 bg-secondary text-white text-[9px] font-bold rounded-full flex items-center justify-center min-w-[18px] min-h-[18px]">
            {badge}
          </span>
        )}
      </div>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

export default Home;
