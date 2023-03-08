import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

export default function Sidebar() {
  return (
  <div className={styles.side}>
    <div className={styles.menuTitle}>
      <span>Posts App</span>
    </div>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><NavLink className={({ isActive }) => (isActive ? styles.activeLink : null)} end to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? styles.activeLink : null)} end to="/posts">Posts</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? styles.activeLink : null)} to="/users">Users</NavLink></li>
      </ul>
    </nav>
    <div className={styles.menuTitle}>
      <span>2023</span>
    </div>
  </div>
  )
}