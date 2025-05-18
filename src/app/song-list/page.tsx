import Link from 'next/link';
import styles from '../styles/SongList.module.css';
import { getSongByTitleAndDescription } from '../../data/songs';

interface SongInfo {
  title: string;
  singer: string;
}

export default function SongList() {
  const part1Songs: SongInfo[] = [
    { title: "What is this feeling", singer: "김명신, 장애리" },
    { title: "Dancing through life", singer: "허진규" },
    { title: "Proud of your boy", singer: "최진훈" },
    { title: "사랑은 마치", singer: "최유리" },
    { title: "My Strongest Suit", singer: "장애리" },
    { title: "A step too far", singer: "조재혁, 김지선, 박지현" },
    { title: "Memphis in Live", singer: "최석우" },
    { title: "Memory", singer: "박지현" },
    { title: "Firework", singer: "김지선" },
    { title: "Come What May", singer: "최진훈, 장유리" },
    { title: "Knowing me Knowing you", singer: "조재혁" },
    { title: "Shine", singer: "최현지" },
    { title: "Me and the sky", singer: "김명신" },
    { title: "그림자는 길어지고", singer: "최석우, 허진규" }
  ];

  const part2Songs: SongInfo[] = [
    { title: "Breathe", singer: "최현지" },
    { title: "거인을 데려와", singer: "최진훈" },
    { title: "Alone", singer: "허진규" },
    { title: "영원한 생명", singer: "박지현" },
    { title: "Take me as I am", singer: "조재혁, 최유리" },
    { title: "If I had wings ", singer: "장애리" },
    { title: "Defying Gravity", singer: "장유리" },
    { title: "그 어디에", singer: "최석우" },
    { title: "행복을 병 속에 담는 법", singer: "최유리" },
    { title: "내가 춤추고 싶을 때", singer: "최현지, 허진규" },
    { title: "마지막 순간", singer: "김지선" },
    { title: "Confrontation(지킬 앤 하이드)", singer: "조재혁" },
    { title: "내 안의 괴물", singer: "김명신" },
    { title: "Confrontation(레미제라블)", singer: "최석우, 최진훈" },
    { title: "Raise you up", singer: "전체" }
  ];

  const getSongLink = (title: string, singer: string) => {
    let description;
    if (singer === '전체') {
      description = '전체 단체곡';
    } else {
      description = singer.includes(',') ? `${singer} 듀엣` : `${singer} 솔로`;
    }
    const song = getSongByTitleAndDescription(title, description);
    return song ? `/song/${song.id}` : '#';
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>공연 순서</h1>

        <div className={styles.partSection}>
          <div className={styles.partHeader}>
            <h2 className={styles.partTitle}>1부</h2>
            <span className={styles.partTime}>17:00 - 18:00</span>
          </div>
          <ul className={styles.songsList}>
            {part1Songs.map((song, index) => (
              <Link 
                key={index} 
                href={getSongLink(song.title, song.singer)}
                className={styles.songLink}
              >
                <li className={styles.songItem}>
                  <span className={styles.songNumber}>{index + 1}</span>
                  <span className={styles.songTitle}>{song.title}</span>
                  <span className={styles.singer}>{song.singer}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className={styles.intermission}>
          <span className={styles.intermissionText}>Intermission</span>
          <span className={styles.intermissionTime}>18:00 - 18:10</span>
        </div>

        <div className={styles.partSection}>
          <div className={styles.partHeader}>
            <h2 className={styles.partTitle}>2부</h2>
            <span className={styles.partTime}>18:10 - 19:20</span>
          </div>
          <ul className={styles.songsList}>
            {part2Songs.map((song, index) => (
              <Link 
                key={index} 
                href={getSongLink(song.title, song.singer)}
                className={styles.songLink}
              >
                <li className={styles.songItem}>
                  <span className={styles.songNumber}>{index + 1}</span>
                  <span className={styles.songTitle}>{song.title}</span>
                  <span className={styles.singer}>{song.singer}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
