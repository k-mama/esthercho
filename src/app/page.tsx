import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={`container ${styles.homeContainer}`}>
        <p className={styles.eyebrow}>AUTHOR &middot; STORYTELLER</p>
        <h1 className={styles.title}>ESTHER CHO</h1>
        <p className={styles.sentence}>
          Stories of faith, memory, childhood, and the quiet places that shape a
          life.
        </p>
        <p className={styles.status}>The house is being prepared.</p>
      </div>
    </main>
  );
}
