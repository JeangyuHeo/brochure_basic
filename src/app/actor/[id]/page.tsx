import { castMembersPart1, castMembersPart2 } from '../../../data/castMembers';
import { getSongByTitleAndDescription } from '../../../data/songs';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Actor.module.css';

type Props = {
  params: {
    id: string;
  }
}

export default function ActorPage({ params }: Props) {
  // await 제거 - params.id는 이미 문자열입니다
  const id = params.id;

  const allCastMembers = [...castMembersPart1, ...castMembersPart2];
  const actor = allCastMembers.find(member => member.id === parseInt(id));

  if (!actor) {
    return <div className={styles.notFound}>배우를 찾을 수 없습니다.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.actorCard}>
        <div className={styles.imageWrapper}>
          <Image src={actor.image} alt={actor.name} layout="fill" objectFit="cover" className={styles.actorImage} />
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
