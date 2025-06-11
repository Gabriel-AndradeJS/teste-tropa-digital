'use client';

// Dashboard.tsx
import { useState } from 'react';
import { Menu } from './components/menu';
import style from './style.module.scss';
import { Menu as MenuIcon, X } from 'lucide-react';

export function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={style.container}>
      <button
        className={style.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      <aside className={`${style.menu} ${menuOpen ? style.open : ''}`}>
        <Menu />
      </aside>

      <main className={style.content} onClick={() => menuOpen && setMenuOpen(false)}>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
      </main>
    </div>
  );
} 