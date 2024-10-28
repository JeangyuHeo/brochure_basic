import { getSongById } from '../../../data/songs';
import Image from 'next/image';
import styles from '../../styles/Song.module.css';

interface PageProps {
  params: { id: string };
}

export default async function SongPage({ params }: PageProps) {
  const id = await params.id;
  const song = getSongById(parseInt(id));

  if (!song) {
    return <div className={styles.notFound}>곡을 찾을 수 없습니다.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.songCard}>
        <div className={styles.imageWrapper}>
          <Image src={song.image} alt={song.title} layout="fill" objectFit="cover" className={styles.songImage} />
        </div>
        <div className={styles.songInfo}>
          <h1 className={styles.songTitle}>{song.title}</h1>
          <p className={styles.songDescription}>{song.description}</p>
        </div>
      </div>
    </div>
  );
}
