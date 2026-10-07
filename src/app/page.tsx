import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <p className={styles.kicker}>Bangkok & Pathum Thani</p>
      <h1>A remarkable setting for what comes next.</h1>
      <p className={styles.lede}>
        Discover a considered collection of spaces for celebrations, workshops,
        and the days worth remembering.
      </p>
      <Link href="/venue" className={styles.cta}>
        Explore the collection <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
