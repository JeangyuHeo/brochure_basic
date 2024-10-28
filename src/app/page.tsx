import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
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
      
      <div className={styles.scheduleInfo}>
        <div className={styles.scheduleCard}>
          <div className={styles.dateSection}>
            <span className={styles.dateLabel}>DATE</span>
            <span className={styles.date}>2024.11.09</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.timeSection}>
            <div className={styles.timeBlock}>
              <span className={styles.partLabel}>PART 1</span>
              <span className={styles.time}>16:00</span>
            </div>
            <div className={styles.timeBlock}>
              <span className={styles.partLabel}>PART 2</span>
              <span className={styles.time}>18:00</span>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.venueSection}>
            <span className={styles.venueLabel}>VENUE</span>
            <span className={styles.venue}>금천 뮤지컬 센터</span>
          </div>
        </div>
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
