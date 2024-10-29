import { getSongById } from '../../../data/songs';
import Image from 'next/image';
import styles from '../../styles/Song.module.css';

interface Props {
  params: {
    id: string;
  };
}

export default async function SongPage({ params }: Props) {
  const resolvedParams = await params;
  const song = getSongById(parseInt(resolvedParams.id));

  if (!song) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>노래를 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.songCard}>
        <div className={styles.imageWrapper}>
          <Image
            src={song.image}
            alt={song.title}
            fill
            priority
            className={styles.songImage}
          />
        </div>
        <div className={styles.songInfo}>
          <h1 className={styles.songTitle}>{song.title}</h1>
          <p className={styles.description}>{song.description}</p>
          {song.musical && <p className={styles.musical}>{song.musical}</p>}
          {song.tags && song.tags.length > 0 && (
            <div className={styles.hashTags}>
              {song.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>#{tag}</span>
              ))}
            </div>
          )}
          {song.songDescription && (
            <p className={styles.songDescription}>{song.songDescription}</p>
          )}
        </div>
      </div>
    </div>
  );
}
