"use client";

import styles from "./venue.module.css";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className={styles.page}>
      <p className={styles.kicker}>Connection interrupted</p>
      <h1>We could not load the venues.</h1>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
