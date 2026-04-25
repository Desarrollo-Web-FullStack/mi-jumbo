import { useNavigate } from "react-router-dom";

export default function PageHeader({ title, showBack = true, actions }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur-xl">
      <div className="px-5 lg:px-8 xl:px-12 max-w-7xl mx-auto flex items-center justify-between h-14 lg:h-16">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="p-1.5 -ml-1.5 text-on-surface hover:text-primary-container transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
          )}
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-container" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 7h16v2H4zm0 4h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6zm2-6h12l1 2H5l1-2z" />
              <rect x="9" y="1" width="6" height="3" rx="1" />
            </svg>
            <h1 className="text-base lg:text-lg font-semibold text-on-surface">{title}</h1>
          </div>
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </header>
  );
}
