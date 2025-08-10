'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/process', label: 'Process' },
  { href: '/localboost/landing', label: 'LocalBoost' },
];

export default function NavBar() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center gap-6">
        <div className="font-semibold">NextLevelLocal</div>
        <ul className="flex items-center gap-4 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`px-2 py-1 rounded ${path === l.href ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto">
          <a href="#contact" className="text-sm px-3 py-1.5 rounded bg-sky-500 text-white hover:bg-sky-600">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
