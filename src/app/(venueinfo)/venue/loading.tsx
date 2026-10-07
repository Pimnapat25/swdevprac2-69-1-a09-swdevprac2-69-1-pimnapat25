import styles from "./venue.module.css";

export default function Loading() {
  return (
    <main className={styles.page} aria-live="polite">
      <p>Preparing the venue collection…</p>
    </main>
  );
}
