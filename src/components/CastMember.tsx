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
        <Image src={member.image} alt={member.name} width={250} height={250} className={styles.image} />
        <div className={styles.info}>
          <h2 className={styles.name}>{member.name}</h2>
          <p className={styles.role}>{member.role}</p>
        </div>
      </div>
    </Link>
  );
}
