import { castMembersPart1, castMembersPart2, castMembersAll } from '../../../data/castMembers';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Actor.module.css';
import type { DirectorExperience } from '../../../types/types';

// SongInfo 타입 song-list/page.tsx에서 복사
interface SongInfo {
  title: string;
  singer: string;
}

// 공연 순서 곡 정보 (song-list/page.tsx에서 복사)
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

function getSongsByName(name: string) {
  // 이름이 포함된 곡을 모두 반환
  const allSongs = [...part1Songs, ...part2Songs];
  return allSongs.filter(song => song.singer.split(',').map(s => s.trim()).includes(name));
}

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ActorPage({ params }: Props) {
  const resolvedParams = await params;
  const actorId = parseInt(resolvedParams.id);
  // castMembersAll도 포함하여 검색
  const actor = [...castMembersPart1, ...castMembersPart2, ...castMembersAll].find(
    member => member.id === actorId
  );

  if (!actor) {
    return <div>배우를 찾을 수 없습니다.</div>;
  }

  const isDirector = actor.role === "연출";
  const isHost = actor.role === "진행";
  const songs = getSongsByName(actor.name);

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
          ) : isHost ? (
            <div className={styles.songList}>
              <h2 className={styles.songsTitle}>진행</h2>
              <p>공연 MC</p>
            </div>
          ) : (
            <div className={styles.songList}>
              <h2 className={styles.songsTitle}>출연 곡</h2>
              {actor.songs.length === 0 ? (
                <p>출연 곡 정보가 없습니다.</p>
              ) : (
                actor.songs.map((song, index) => (
                  <Link
                    key={index}
                    href={`/song/${song.id}`}
                    className={styles.songLink}
                  >
                    <div className={styles.songInfo}>
                      <span className={styles.songTitle}>{song.title}</span>
                      <span className={styles.songDescription}>{song.description}</span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
