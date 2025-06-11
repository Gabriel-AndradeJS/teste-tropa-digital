'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menu from './menu.module.scss';
import logo from '../../../../public/logo.png';
import avatar from '../../../../public/avatar.jpg';
import { LayoutDashboard, Power, Rows4, User, Users, Menu as MenuIcon, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={menu.menuToggle} onClick={() => setOpen(!open)} aria-label="Abrir menu">
        {open ? <X size={24} className={menu.button} /> : <MenuIcon className={menu.button} size={24}  />}
      </button>

      <aside className={`${menu.container} ${open ? menu.open : ''}`}>
        <nav className={menu.nav}>
          <Image src={logo} alt="Logo" width={170} className={menu.logo} />
          <div className={menu.items}>
            <ul>
              <li className={menu.sectionTitle}>Menu</li>
              <li>
                <LayoutDashboard />
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Rows4 />
                <Link href="/dashboard/analytics">Eventos</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faPeopleGroup} className="fa-icon" />
                <Link href="/dashboard/settings">Equipes</Link>
              </li>
              <li>
                <Users />
                <Link href="/dashboard/registrations">Inscrições</Link>
              </li>
            </ul>
          </div>
        </nav>

        <footer className={menu.profile}>
          <div className={menu.userInfo}>
            <Image src={avatar} alt="Avatar" width={50} className={menu.avatar} />
            <div>
              <p className={menu.username}>Kaique Steck</p>
              <span className={menu.role}>Administrador</span>
            </div>
          </div>
          <div className={menu.user}>
            <User width={20} color="#ccc" />
            <p className={menu.p}>Alterar dados</p>
          </div>
          <div className={menu.logout}>
            <Power width={20} color="#ccc" />
            <p className={menu.p}>Sair</p>
          </div>
        </footer>
      </aside>
    </>
  );
}
