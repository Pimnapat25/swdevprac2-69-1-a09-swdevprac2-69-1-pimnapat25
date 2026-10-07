import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import getVenue from "@/libs/getVenue";
import styles from "./detail.module.css";

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;

  let venueResponse;
  try {
    venueResponse = await getVenue(vid);
  } catch {
    notFound();
  }

  const venue = venueResponse.data;

  return (
    <main className={styles.page}>
      <Link href="/venue" className={styles.back}>
        <span aria-hidden="true">←</span> All venues
      </Link>
      <div className={styles.layout}>
        <div className={styles.imageFrame}>
          <Image
            src={venue.picture}
            alt={`${venue.name} venue`}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 58vw"
            className={styles.image}
          />
        </div>
        <section className={styles.details}>
          <p className={styles.kicker}>Private event venue</p>
          <h1>{venue.name}</h1>
          <p className={styles.address}>
            {venue.address}
            <br />
            {venue.district}, {venue.province} {venue.postalcode}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Daily rate</dt>
              <dd>฿{venue.dailyrate.toLocaleString("en-US")}</dd>
            </div>
            <div>
              <dt>Telephone</dt>
              <dd>
                <a href={`tel:${venue.tel}`}>{venue.tel}</a>
              </dd>
            </div>
          </dl>
          <a href={`tel:${venue.tel}`} className={styles.contact}>
            Enquire about this venue <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>
    </main>
  );
}
