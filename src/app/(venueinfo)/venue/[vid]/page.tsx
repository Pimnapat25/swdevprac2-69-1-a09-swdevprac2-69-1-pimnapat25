import Image from "next/image";
import getVenue from "@/libs/getVenue";

type VenueDetailPageProps = {
  params: Promise<{ vid: string }>;
};

export default async function VenueDetailPage({ params }: VenueDetailPageProps) {
  const { vid } = await params;
  const venueJson = await getVenue(vid);
  const venue = venueJson.data;

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="relative h-72 w-full overflow-hidden rounded-lg md:h-[28rem]">
        <Image
          src={venue.picture}
          alt={venue.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
        />
      </div>
      <section className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">{venue.name}</h1>
        <p className="mt-4 text-gray-700">
          {venue.address}, {venue.district}, {venue.province} {venue.postalcode}
        </p>
        <p className="mt-2 text-gray-700">Telephone: {venue.tel}</p>
        <p className="mt-4 text-xl font-semibold text-gray-900">
          Daily rate: ฿{venue.dailyrate.toLocaleString("en-US")}
        </p>
      </section>
    </main>
  );
}
