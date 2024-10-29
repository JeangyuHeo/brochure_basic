import { castMembersPart2 } from '../../data/castMembers';
import CastMember from '../../components/CastMember';
import styles from '../styles/Cast.module.css';

export default function Cast2Page() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>2부 출연진</h1>
      <div className={styles.castGrid}>
        {castMembersPart2.map(member => (
          <CastMember key={member.id} member={member} />
        ))}
      </div>
    </main>
  );
}
