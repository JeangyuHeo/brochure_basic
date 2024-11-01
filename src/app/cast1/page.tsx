import { castMembersPart1 } from '../../data/castMembers';
import CastMember from '../../components/CastMember';
import Image from 'next/image';
import styles from '../styles/Cast.module.css';

export default function Cast1Page() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>1부 출연진</h1>
      <div className={styles.groupPhotoContainer}>
        <Image
          src="/images/photo_1.jpg"
          alt="1부 출연진 단체 사진"
          width={500}
          height={375}
          priority
          className={styles.groupPhoto}
        />
      </div>
      <section className={styles.castSection}>
        <div className={styles.castGrid}>
          {castMembersPart1.map(member => (
            <CastMember key={member.id} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
