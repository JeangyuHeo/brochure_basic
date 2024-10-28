import styles from '../styles/SongList.module.css';

export default function SongList() {
  const performances = [
    { time: "13:00", artist: "GRAYE", duration: "60min" },
    { time: "14:00", artist: "PART TIME COOKS", duration: "15min" },
    { time: "14:15", artist: "PNSB W/ DIPCOIN", duration: "60min" },
    { time: "15:15", artist: "SINQMIN", duration: "45min" },
    { time: "16:00", artist: "PUTE DELUXE", duration: "60min", description: "(DIDI HAN, FALLERS, YANN CAVAILLE, ABOUT JULIAN)" },
    { time: "17:00", artist: "DPR LIVE", duration: "20min" },
    { time: "17:20", artist: "BILL STAX", duration: "30min" },
    { time: "18:00", artist: "CLUB CHEVAL", duration: "60min" },
    { time: "19:00", artist: "JOYRYDE", duration: "90min" },
    { time: "20:30", artist: "BEWHY", duration: "30min" },
    { time: "21:00", artist: "ZICO", duration: "30min" },
    { time: "21:30", artist: "WIZ KHALIFA", duration: "60min" },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>곡 순서</h1>
        <div className={styles.timeInfo}>
          <p>티켓 부스 오픈: 오후 1:00</p>
          <p>티켓 부스 마감: 오후 8:30</p>
        </div>
        <ul className={styles.performanceList}>
          {performances.map((performance, index) => (
            <li key={index} className={styles.performanceItem}>
              <span className={styles.time}>{performance.time}</span>
              <span className={styles.artist}>{performance.artist}</span>
              <span className={styles.duration}>{performance.duration}</span>
              {performance.description && (
                <span className={styles.description}>{performance.description}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
