"use client";

import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
  venueName: string;
  imgSrc: string;
  location?: string;
  rate?: number;
  rating?: number;
  onRatingChange?: (rating: number) => void;
}

export default function Card({
  venueName,
  imgSrc,
  location,
  rate,
  rating,
  onRatingChange,
}: CardProps) {
  const showRating = rating !== undefined && onRatingChange !== undefined;

  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <Image
          src={imgSrc}
          alt={`${venueName} venue`}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className={styles.image}
        />
        {rate !== undefined ? (
          <span className={styles.rate}>฿{rate.toLocaleString("en-US")} / day</span>
        ) : null}
      </div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Event venue</p>
        <h2>{venueName}</h2>
        {location ? <p className={styles.location}>{location}</p> : null}
        {showRating ? (
          <div className={styles.rating} aria-label={`Rating: ${rating} out of 5`}>
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                aria-label={`Rate ${value} stars`}
                onClick={() => onRatingChange(value)}
                className={value <= rating ? styles.activeStar : styles.star}
              >
                ★
              </button>
            ))}
          </div>
        ) : null}
        <span className={styles.explore} aria-hidden="true">
          View venue <span>↗</span>
        </span>
      </div>
    </article>
  );
}
