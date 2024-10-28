import { castMembersPart1, castMembersPart2 } from '../../../data/castMembers';
import { getSongByTitleAndDescription } from '../../../data/songs';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Actor.module.css';

type PageProps = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ActorPage({ params, searchParams }: PageProps) {
  if (!params.id) {
    return <div className={styles.notFound}>잘못된 접근입니다.</div>;
  }

  const allCastMembers = [...castMembersPart1, ...castMembersPart2];
  const actor = allCastMembers.find(member => member.id === parseInt(params.id));

  if (!actor) {
    return <div className={styles.notFound}>배우를 찾을 수 없습니다.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.actorCard}>
        <div className={styles.imageWrapper}>
          <Image 
            src={actor.image} 
            alt={actor.name} 
            fill
            sizes="(max-width: 300px) 100vw"
            className={styles.actorImage} 
          />
        </div>
        <div className={styles.actorInfo}>
          <h1 className={styles.actorName}>{actor.name}</h1>
          <h2 className={styles.roleTitle}>{actor.role}</h2>
          <h3 className={styles.songsTitle}>출연 곡</h3>
          <ul className={styles.songsList}>
            {actor.songs.map((song, index) => {
              const fullSong = getSongByTitleAndDescription(song.title, song.description);
              return (
                <li key={index} className={styles.songItem}>
                  <Link href={fullSong ? `/song/${fullSong.id}` : '#'} className={styles.songLink}>
                    <span className={styles.songTitle}>{song.title}</span>
                    <span className={styles.songDescription}>{song.description}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
