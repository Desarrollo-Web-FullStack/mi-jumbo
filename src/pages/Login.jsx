import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-surface to-blue-50 flex font-sans">
      {/* Panel decorativo - solo visible en desktop */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] relative bg-gradient-to-br from-primary to-primary-container overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-32 right-16 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-secondary/30 blur-2xl" />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 xl:px-24">
          <div className="flex items-center gap-3 mb-12">
            <svg
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 7h16v2H4zm0 4h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6zm2-6h12l1 2H5l1-2z" />
              <rect x="9" y="1" width="6" height="3" rx="1" />
            </svg>
            <span className="text-white font-bold text-2xl">Mi Jumbo</span>
          </div>

          <h2 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
            Tu supermercado
            <br />
            <span className="text-white/80">en la palma de tu mano</span>
          </h2>
          <p className="mt-6 text-white/70 text-lg max-w-md leading-relaxed">
            Descubre miles de productos, ofertas exclusivas y la comodidad de
            comprar desde donde quieras.
          </p>

          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-white">10K+</p>
              <p className="text-white/60 text-sm mt-1">Productos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">50K+</p>
              <p className="text-white/60 text-sm mt-1">Clientes</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">99%</p>
              <p className="text-white/60 text-sm mt-1">Satisfacción</p>
            </div>
          </div>
        </div>
      </div>

      {/* Panel del formulario */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header mobile */}
        <header className="px-5 py-4 lg:hidden">
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
        </header>

        <main className="flex-1 flex items-start lg:items-center justify-center px-5 pt-6 pb-10 lg:px-12 xl:px-20">
          <div className="w-full max-w-sm lg:max-w-md">
            {/* Logo desktop dentro del form */}
            <div className="hidden lg:flex items-center gap-2 mb-8">
              <svg
                className="w-7 h-7 text-primary-container"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 7h16v2H4zm0 4h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6zm2-6h12l1 2H5l1-2z" />
                <rect x="9" y="1" width="6" height="3" rx="1" />
              </svg>
              <span className="text-primary-container font-semibold text-xl">
                Mi Jumbo
              </span>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl px-6 py-8 lg:px-10 lg:py-10 shadow-[0_8px_32px_rgba(0,72,141,0.06)]">
              <h1 className="text-2xl lg:text-3xl font-bold text-on-surface text-center lg:text-left">
                Welcome Back
              </h1>
              <p className="text-on-surface-variant text-sm lg:text-base text-center lg:text-left mt-2">
                Please enter your details to sign in.
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-11 pr-4 py-3 lg:py-3.5 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline-variant text-sm focus:outline-none focus:ring-2 focus:ring-primary-container/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-sm font-medium text-on-surface">
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-xs text-primary-container font-medium hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-11 py-3 lg:py-3.5 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline-variant text-sm focus:outline-none focus:ring-2 focus:ring-primary-container/30 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant transition-colors"
                    >
                      {showPassword ? (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 lg:py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold text-sm lg:text-base flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_8px_32px_rgba(0,72,141,0.25)] cursor-pointer"
                >
                  Sign In
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </form>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex-1 h-px bg-surface-container-high" />
                <span className="text-xs text-outline font-medium tracking-wide uppercase">
                  Or continue with
                </span>
                <div className="flex-1 h-px bg-surface-container-high" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-2.5 lg:py-3 rounded-xl bg-surface-container-low text-on-surface text-sm font-medium hover:bg-surface-container transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-2.5 lg:py-3 rounded-xl bg-surface-container-low text-on-surface text-sm font-medium hover:bg-surface-container transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>

            <p className="text-center text-sm text-on-surface-variant mt-6">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-primary-container font-semibold hover:underline"
              >
                Create an Account
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
