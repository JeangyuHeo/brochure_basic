import Link from 'next/link';
import styles from '../app/styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          SDS MUSICAL
        </Link>
        <div className={styles.links}>
          {/* <Link href="/cast1" className={styles.link}>
            1부
          </Link>
          <Link href="/cast2" className={styles.link}>
            2부
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
