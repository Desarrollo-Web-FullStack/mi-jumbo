import { useState, useEffect } from "react";
import { collection, getDocs, query, where, limit, startAfter } from "firebase/firestore";
import { db } from "../back/database.js";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../back/auth"
import ProductCard from "../components/molecules/ProductCard";
import NavItem from "../components/atoms/NavItem";

const categories = [
  "All",
  "Groceries",
  "Electronics",
  "Home & Living",
  "Beauty",
  "Toys",
];

function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let q;
        if (activeCategory === "All") {
          q = query(collection(db, "products"), limit(10));
        } else {
          q = query(collection(db, "products"), where("category", "==", activeCategory), limit(10));
        }

        const querySnapshot = await getDocs(q);
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProducts(productsList);
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
        setHasMore(querySnapshot.docs.length === 10);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory]);

  const fetchMore = async () => {
    if (!lastVisible) return;

    try {
      let q;
      if (activeCategory === "All") {
        q = query(collection(db, "products"), startAfter(lastVisible), limit(10));
      } else {
        q = query(collection(db, "products"), where("category", "==", activeCategory), startAfter(lastVisible), limit(10));
      }

      const querySnapshot = await getDocs(q);
      const productsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setProducts(prev => [...prev, ...productsList]);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(querySnapshot.docs.length === 10);
    } catch (error) {
      console.error("Error fetching more products: ", error);
    }
  };

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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-on-surface-variant text-sm">
              Loading products...
            </p>
          </div>
        ) : products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-on-surface-variant text-sm">
              No products found in this category.
            </p>
          </div>
        )}

        {hasMore && products.length > 0 && !loading && (
          <div className="flex justify-center mt-8">
            <button
              onClick={fetchMore}
              className="px-6 py-2 bg-primary-container text-on-primary rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              Load More
            </button>
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



export default Home;
