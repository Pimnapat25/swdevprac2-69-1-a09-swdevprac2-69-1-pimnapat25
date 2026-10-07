import Link from "next/link";
import type { VenueJson } from "../../interface";
import Card from "./Card";
import styles from "@/app/page.module.css";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson> | VenueJson;
}) {
  const venues = await venuesJson;

  return (
    <div className={styles.cards}>
      {venues.data.map((venue) => (
        <Link key={venue.id} href={`/venue/${venue.id}`} className="block">
          <Card venueName={venue.name} imgSrc={venue.picture} />
        </Link>
      ))}
    </div>
  );
}
