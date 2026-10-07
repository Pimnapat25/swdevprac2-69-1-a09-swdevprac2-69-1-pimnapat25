import Link from "next/link";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label="Gather home">
        <span className={styles.mark}>G</span>
        <span>Gather</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/venue">Explore venues</Link>
      </nav>
    </header>
  );
}
