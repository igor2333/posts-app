import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
  <div className={styles.side}>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><NavLink className={({ isActive }) => (isActive ? styles.activeLink : null)} end to="/">Posts</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? styles.activeLink : null)} to="/users">Users</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? styles.activeLink : null)} to="/comments">Comments</NavLink></li>
      </ul>
    </nav>
  </div>
  )
}