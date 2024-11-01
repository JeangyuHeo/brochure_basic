import { castMembersPart2 } from '../../data/castMembers';
import CastMember from '../../components/CastMember';
import Image from 'next/image';
import styles from '../styles/Cast.module.css';

export default function Cast2Page() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>2부 출연진</h1>
      <div className={styles.groupPhotoContainer}>
        <Image
          src="/images/photo_2.jpg"
          alt="2부 출연진 단체 사진"
          width={500}
          height={375}
          priority
          className={styles.groupPhoto}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <section className={styles.castSection}>
        <div className={styles.castGrid}>
          {castMembersPart2.map(member => (
            <CastMember key={member.id} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
