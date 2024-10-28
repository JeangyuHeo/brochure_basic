import { castMembersPart1 } from '../../data/castMembers';
import CastMember from '../../components/CastMember';
import styles from '../styles/Cast.module.css';

export default function Cast1Page() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>1부 출연진 소개</h1>
      <div className={styles.castGrid}>
        {castMembersPart1.map(member => (
          <CastMember key={member.id} member={member} />
        ))}
      </div>
    </main>
  );
}
