import { Link } from "react-router-dom";
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link className={styles.logo} to="/">MindfulCare</Link>
        </li>
        <li className={styles.navLinks}>
          <Link className={styles.navlink} to="/">Home</Link>
          <Link className={styles.navlink} to="/coping">Coping Strategies</Link>
          <Link className={styles.navlink} to="/support">Get Support</Link>
          <Link className={styles.navlink} to="/landing">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}
