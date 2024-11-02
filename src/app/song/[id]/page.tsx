import { getSongById } from '../../../data/songs';
import styles from '../../styles/Song.module.css';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function SongPage({ params }: Props) {
  const resolvedParams = await params;
  const songId = parseInt(resolvedParams.id);
  const song = getSongById(songId);

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
