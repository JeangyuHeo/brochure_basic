import Link from 'next/link';
import styles from '../styles/SongList.module.css';
import { getSongByTitleAndDescription } from '../../data/songs';

interface SongInfo {
  title: string;
  singer: string;
}

export default function SongList() {
  const part1Songs: SongInfo[] = [
    { title: "언제나 그대 곁에", singer: "허진규, 고재은" },
    { title: "Santa Fe", singer: "신대건" },
    { title: "나는 나를 말하는 사람", singer: "이지현" },
    { title: "온 세상 내 것이었을 때", singer: "김지선" },
    { title: "너에게 선사하는 지옥", singer: "류호용" },
    { title: "Waving through a window", singer: "허진규" },
    { title: "On the Edge of time", singer: "김지선, 신대건" },
    { title: "내 운명 피하고 싶어", singer: "최진훈" },
    { title: "A New Life", singer: "홍수영" },
    { title: "나는 나만의 것", singer: "고재은" },
    { title: "데드맘", singer: "이지현" },
    { title: "The other side", singer: "최진훈, 류호용" },
    { title: "Wizard and I", singer: "김지선" },
    { title: "First time in love", singer: "허진규, 이지현" },
    { title: "모두의 세상", singer: "류호용" },
    { title: "그 눈을 떠", singer: "허진규" },
    { title: "사느냐 죽느냐", singer: "최진훈" },
    { title: "겟세마네", singer: "신대건" },
    { title: "You will be found", singer: "전체" }
  ];

  const part2Songs: SongInfo[] = [
    { title: "언제나 그대 곁에", singer: "최석우, 장애리" },
    { title: "지금 이 순간", singer: "허용훈" },
    { title: "I Dreamed a dream", singer: "김명신" },
    { title: "사랑이야", singer: "최유리" },
    { title: "Till I hear you Sing", singer: "최석우" },
    { title: "On the Edge of time", singer: "김명신, 허용훈" },
    { title: "Always Starting over", singer: "장애리" },
    { title: "On My Own", singer: "장은진" },
    { title: "그게 나의 전부라는 걸", singer: "최유리, 홍종완" },
    { title: "춤을 춰요 에스메랄다", singer: "허용훈" },
    { title: "난 괴물", singer: "최석우" },
    { title: "도쿄찬가", singer: "최유리" },
    { title: "데스노트", singer: "홍종완" },
    { title: "God don't make no Trash", singer: "장애리" },
    { title: "Never Enough", singer: "김명신" },
    { title: "The other side", singer: "최석우, 허용훈" },
    { title: "You will be found", singer: "전체" }
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
            <span className={styles.partTime}>16:00 - 17:30</span>
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
          <span className={styles.intermissionTime}>17:30 - 18:00</span>
        </div>

        <div className={styles.partSection}>
          <div className={styles.partHeader}>
            <h2 className={styles.partTitle}>2부</h2>
            <span className={styles.partTime}>18:00 - 19:30</span>
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
