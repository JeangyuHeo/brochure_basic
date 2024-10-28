import { castMembersPart1, castMembersPart2 } from '../../../data/castMembers';
import { getSongByTitleAndDescription } from '../../../data/songs';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Actor.module.css';

// 타입을 더 구체적으로 정의
type Params = {
  id: string;
}

type Props = {
  params: Promise<Params>;
}

// metadata 생성 함수 추가
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const allCastMembers = [...castMembersPart1, ...castMembersPart2];
  const actor = allCastMembers.find(member => member.id === parseInt(resolvedParams.id));
  
  return {
    title: actor ? `${actor.name} - SDS 뮤지컬` : '배우 정보',
  };
}

export default async function ActorPage({ params }: Props) {
  const resolvedParams = await params;
  const actorId = resolvedParams.id;
  
  const allCastMembers = [...castMembersPart1, ...castMembersPart2];
  const actor = allCastMembers.find(member => member.id === parseInt(actorId));

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
            sizes="(max-width: 768px) 100vw, 300px"
            priority
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
                    <div className={styles.songInfo}>
                      <span className={styles.songTitle}>{song.title}</span>
                      <span className={styles.songDescription}>{song.description}</span>
                    </div>
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
