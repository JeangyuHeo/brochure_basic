import Image from 'next/image';
import Link from 'next/link';
import styles from '../app/styles/CastMember.module.css';
import type { CastMember } from '../types/types';

interface CastMemberProps {
  member: CastMember;
}

export default function CastMember({ member }: CastMemberProps) {
  return (
    <Link href={`/actor/${member.id}`} className={styles.castMember}>
      <div className={styles.imageContainer}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{member.name}</h2>
        <p className={styles.role}>{member.role}</p>
      </div>
    </Link>
  );
}
