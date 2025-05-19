import { castMembersAll } from '../../data/castMembers';
import CastMember from '../../components/CastMember';
import styles from '../styles/Cast.module.css';

export default function CastPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>출연진</h1>
      {/* <div className={styles.groupPhotoContainer}>
        <Image
          src="/images/photo_2.jpg"
          alt="출연진 단체 사진"
          width={500}
          height={375}
          priority
          className={styles.groupPhoto}
        />
      </div> */}
      <section className={styles.castSection}>
        <div className={styles.castGrid}>
          {castMembersAll.map(member => (
            <CastMember key={member.id} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
