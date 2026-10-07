import Link from "next/link";
import type { VenueJson } from "../../interface";
import Card from "./Card";
import styles from "./VenueCatalog.module.css";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson> | VenueJson;
}) {
  const venues = await venuesJson;

  if (venues.data.length === 0) {
    return <p className={styles.empty}>No venues are available right now.</p>;
  }

  return (
    <div className={styles.grid}>
      {venues.data.map((venue) => (
        <Link
          href={`/venue/${venue.id}`}
          key={venue.id}
          className={styles.cardLink}
          aria-label={`View details for ${venue.name}`}
        >
          <Card
            venueName={venue.name}
            imgSrc={venue.picture}
            location={`${venue.district}, ${venue.province}`}
            rate={venue.dailyrate}
          />
        </Link>
      ))}
    </div>
  );
}
