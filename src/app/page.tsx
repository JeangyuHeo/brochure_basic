import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SDS 뮤지컬</h1>
      
      <div className={styles.imageContainer}>
        <Image
          src="/images/total.jpg"
          alt="SDS 뮤지컬"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.buttonContainer}>
        <Link href="/song-list" className={`${styles.button} ${styles.button3}`}>
          곡 순서
        </Link>
      </div>
      
      <div className={styles.buttonContainer}>
        <Link href="/cast1" className={`${styles.button} ${styles.button1}`}>
          1부 출연진
        </Link>
        <Link href="/cast2" className={`${styles.button} ${styles.button2}`}>
          2부 출연진
        </Link>
      </div>
    </div>
  );
}
