import React from 'react';
import styles from '../styles/Cast.module.css';

interface CastMember {
  id: string;
  name: string;
  role: string;
  // 필요한 다른 속성들...
}

export default function CastPage() {
  const castMembers: CastMember[] = [
    // 캐스트 멤버 데이터...
  ];

  return (
    <div className={styles.container}>
      <h1>Cast</h1>
      <div className={styles.castGrid}>
        {castMembers.map((member) => (
          <div key={member.id} className={styles.castCard}>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

