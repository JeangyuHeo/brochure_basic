"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Home.module.css';
import { useEffect, useState } from 'react';

const groupPhotos = [
  '/images/photo_10.jpg',
  '/images/photo_11.jpg',
  '/images/photo_12.jpg',
];

export default function Home() {
  const [photoIdx, setPhotoIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoIdx((prev) => (prev + 1) % groupPhotos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 타이틀 섹션 */}
        <div className={styles.titleSection}>
          <h1 className={styles.mainTitle}>2025 SDS Musical</h1>
          <h2 className={styles.subTitle}>Gala Concert</h2>
          <span className={styles.ordinal}>4th</span>
        </div>

        {/* 이미지 섹션 */}
        <div className={styles.imageContainer}>
          <Image
            src={groupPhotos[photoIdx]}
            alt="공연 포스터"
            fill
            priority
            className={styles.image}
          />
        </div>

        {/* 공연 정보 카드 */}
        <div className={styles.scheduleCard}>
          <div className={styles.scheduleRow}>
            <span className={styles.scheduleLabel}>일시</span>
            <span className={styles.scheduleValue}>2025.05.24</span>
          </div>
          <div className={styles.scheduleRow}>
            <span className={styles.scheduleLabel}>시간</span>
            <div className={styles.timeValues}>
              <span>1부 17:00~18:00</span>
              <span>인터미션 18:00~18:10</span>
              <span>2부 18:10~19:20</span>
            </div>
          </div>
          <div className={styles.scheduleRow}>
            <span className={styles.scheduleLabel}>장소</span>
            <span className={styles.scheduleValue}>북아현아트홀</span>
          </div>
        </div>

        {/* 버튼 그룹 */}
        <div className={styles.buttonGroup}>
          <div className={styles.primaryButtonContainer}>
            <Link href="/song-list" className={`${styles.button} ${styles.primary}`}>
              공연 순서
            </Link>
          </div>
          <div className={styles.secondaryButtonContainer}>
          {/* <div className={styles.primaryButtonContainer}> */}
            {/*
            <Link href="/cast1" className={`${styles.button} ${styles.secondary}`}>
              1부 출연진
            </Link>
            <Link href="/cast2" className={`${styles.button} ${styles.secondary}`}>
              2부 출연진
            </Link>
            */}
            <Link href="/cast" className={`${styles.button} ${styles.secondary}`}>
              출연진
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
