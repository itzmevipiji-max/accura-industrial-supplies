import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/products', 'Products'],
  ['/gst-details', 'GST Details'],
  ['/contact', 'Contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `border-b-2 py-7 text-sm font-semibold transition ${
                  isActive
                    ? 'border-safety text-ink'
                    : 'border-transparent text-slate-600 hover:text-ink'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link to="/contact?subject=quote" className="btn-primary">
            Request a Quote <ArrowUpRight size={16} />
          </Link>
        </div>
        <button
          className="rounded p-2 text-ink lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block rounded px-3 py-3 font-semibold ${
                  isActive ? 'bg-orange-50 text-safety' : 'text-slate-700'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact?subject=quote" className="btn-primary mt-3 w-full">
            Request a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
