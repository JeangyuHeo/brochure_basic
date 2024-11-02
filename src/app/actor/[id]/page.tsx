import { castMembersPart1, castMembersPart2 } from '../../../data/castMembers';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Actor.module.css';
import type { DirectorExperience } from '../../../types/types';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ActorPage({ params }: Props) {
  const resolvedParams = await params;
  const actorId = parseInt(resolvedParams.id);
  const actor = [...castMembersPart1, ...castMembersPart2].find(
    member => member.id === actorId
  );

  if (!actor) {
    return <div>배우를 찾을 수 없습니다.</div>;
  }

  const isDirector = actor.role === "연출";

  return (
    <div className={styles.container}>
      <div className={styles.actorCard}>
        <div className={styles.imageWrapper}>
          <Image
            src={actor.image}
            alt={actor.name}
            fill
            priority
            className={styles.actorImage}
          />
        </div>
        <div className={styles.actorInfo}>
          <h1 className={styles.actorName}>{actor.name}</h1>
          <p className={styles.actorRole}>{actor.role}</p>
          
          {isDirector && actor.directorExperiences ? (
            <div className={styles.experienceList}>
              <h2 className={styles.experienceTitle}>연출 경력</h2>
              {actor.directorExperiences.map((exp: DirectorExperience, index: number) => (
                <div key={index} className={styles.experienceItem}>
                  <span className={styles.experienceYear}>{exp.year}</span>
                  <span className={styles.experienceShow}>{exp.title}</span>
                  <span className={styles.experienceRole}>{exp.role}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.songList}>
              <h2 className={styles.songsTitle}>출연 곡</h2>
              {actor.songs.map((song, index) => (
                <Link
                  key={index}
                  href={`/song/${song.id}`}
                  className={styles.songLink}
                >
                  <div className={styles.songInfo}>
                    <span className={styles.songTitle}>{song.title}</span>
                    <span className={styles.songDescription}>
                      {song.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
