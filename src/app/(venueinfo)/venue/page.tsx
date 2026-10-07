import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";
import styles from "./venue.module.css";

export default function VenuePage() {
  const venues = getVenues();

  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div>
          <p className={styles.kicker}>The venue collection</p>
          <h1>Spaces with a sense of occasion.</h1>
        </div>
        <p>
          Three distinctive venues, thoughtfully selected for gatherings that
          deserve more than an ordinary room.
        </p>
      </section>
      <VenueCatalog venuesJson={venues} />
    </main>
  );
}
