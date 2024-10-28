import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 타이틀 섹션 */}
        <div className={styles.titleSection}>
          <h1 className={styles.mainTitle}>2024 SDS Musical</h1>
          <h2 className={styles.subTitle}>Gala Concert</h2>
          <span className={styles.ordinal}>3rd</span>
        </div>

        {/* 이미지 섹션 */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/total.jpg"
            alt="SDS 뮤지컬"
            fill
            priority
            className={styles.image}
          />
        </div>

        {/* 공연 정보 카드 */}
        <div className={styles.scheduleCard}>
          <div className={styles.scheduleRow}>
            <span className={styles.scheduleLabel}>일시</span>
            <span className={styles.scheduleValue}>2024.11.09</span>
          </div>
          <div className={styles.scheduleRow}>
            <span className={styles.scheduleLabel}>시간</span>
            <div className={styles.timeValues}>
              <span>1부 16:00</span>
              <span>2부 18:00</span>
            </div>
          </div>
          <div className={styles.scheduleRow}>
            <span className={styles.scheduleLabel}>장소</span>
            <span className={styles.scheduleValue}>금천 뮤지컬 센터</span>
          </div>
        </div>

        {/* 버튼 그룹 */}
        <div className={styles.buttonGroup}>
          <Link href="/song-list" className={`${styles.button} ${styles.primary}`}>
            공연 순서
          </Link>
          <Link href="/cast1" className={`${styles.button} ${styles.secondary}`}>
            1부 출연진
          </Link>
          <Link href="/cast2" className={`${styles.button} ${styles.secondary}`}>
            2부 출연진
          </Link>
        </div>
      </div>
    </div>
  );
}
