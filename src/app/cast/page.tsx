import React from 'react';
import { castMembersPart1, castMembersPart2 } from '../../data/castMembers';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Cast.module.css';

export const metadata = {
  title: '출연진 - SDS 뮤지컬',
};

interface CastMember {
  id: string;
  name: string;
  role: string;
  image: string;
  // 필요한 다른 속성들...
}

export default function CastPage() {
  const allCastMembers = [...castMembersPart1, ...castMembersPart2];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>출연진</h1>
      <div className={styles.grid}>
        {allCastMembers.map((member) => (
          <Link href={`/actor/${member.id}`} key={member.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 160px, 200px"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h2 className={styles.name}>{member.name}</h2>
              <p className={styles.role}>{member.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
