import { CastMember as CastMemberType } from '../types/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../app/styles/CastMember.module.css';

interface CastMemberProps {
  member: CastMemberType;
}

export default function CastMember({ member }: CastMemberProps) {
  return (
    <Link href={`/actor/${member.id}`} className={styles.link}>
      <div className={styles.castMember}>
        <div className={styles.imageContainer}>
          <Image 
            src={member.image} 
            alt={member.name} 
            fill
            sizes="(max-width: 768px) 160px, 250px"
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <h2 className={styles.name}>{member.name}</h2>
          <p className={styles.role}>{member.role}</p>
        </div>
      </div>
    </Link>
  );
}
