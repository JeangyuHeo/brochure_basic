import Link from 'next/link';
import styles from '../app/styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          SDS 뮤지컬
        </Link>
        <div className={styles.links}>
          <Link href="/song-list" className={styles.link}>
            곡 순서
          </Link>
          <Link href="/cast1" className={styles.link}>
            1부 출연진
          </Link>
          <Link href="/cast2" className={styles.link}>
            2부 출연진
          </Link>
        </div>
      </div>
    </nav>
  );
}
