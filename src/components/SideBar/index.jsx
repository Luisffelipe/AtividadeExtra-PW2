
import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from '../Avatar';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
          className={styles.cover}
          src="src\public\backgroundAvatar.png"
      />
      
      <div className={styles.profile}>
      <Avatar />

        <strong>Luis Felipe</strong>

        <span>Dev fullstack</span>
      </div>

      <footer className={styles.footer}>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}