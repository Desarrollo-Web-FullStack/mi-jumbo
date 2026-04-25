export default function NavItem({ icon, label, active, badge }) {
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
