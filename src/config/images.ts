/**
 * IMAGE REPLACEMENT GUIDE
 * -----------------------
 * All photos are organized by website section.
 * To swap a photo, replace the file in public/images/ or update the path below.
 */
export const images = {
  /** Section 1 — Hero full-screen background */
  heroBackground: "/images/couple/hero-night.png",

  /** Section 2 — Introduction side photo */
  introduction: "/images/couple/introduction.png",

  /** Section 3 — Thank You large photo */
  thankYou: "/images/couple/thank-you.png",

  /** Section 4 — Appreciation side photo */
  appreciation: "/images/couple/appreciation.png",

  /** Section 5 — Food trips parallax background */
  foodTripsBackground: "/images/food-trips/tinatangi-cafe.png",

  /** Section 5 — Food trips photo gallery */
  foodTripsGallery: [
    "/images/food-trips/hotpot.png",
    "/images/food-trips/ramen-sashimi.png",
    "/images/food-trips/korean-bbq.png",
    "/images/food-trips/ramen-sushi.png",
    "/images/food-trips/rice-bowl.png",
    "/images/food-trips/bibimbap.png",
    "/images/food-trips/restaurant-spread.png",
    "/images/food-trips/couple-seafood.png",
  ],

  /** Section 6 — Adventures scrapbook (sea & beach trips) */
  adventures: [
    "/images/adventures/laiya.png",
    "/images/adventures/sea-boat.png",
    "/images/adventures/beach-day.png",
    "/images/adventures/ferry-ride.png",
  ],

  /** Section 7 — Bahay-bahayan parallax background */
  bahayBahayanBackground: "/images/bahay-bahayan/bg.png",

  /** Section 7 — Bahay-bahayan photo gallery */
  bahayBahayanGallery: [
    "/images/bahay-bahayan/01-pasta.png",
    "/images/bahay-bahayan/02-mirror.png",
    "/images/bahay-bahayan/03-mirror-hug.png",
    "/images/bahay-bahayan/04-silly-kiss.png",
    "/images/bahay-bahayan/05-bed-selfie.png",
    "/images/bahay-bahayan/06-beer-cheers.png",
    "/images/bahay-bahayan/07-samgyupsal.png",
    "/images/bahay-bahayan/08-kitchen.png",
    "/images/bahay-bahayan/09-pink-blanket.png",
    "/images/bahay-bahayan/10-hoodie.png",
    "/images/bahay-bahayan/11-mirror-peace.png",
  ],

  /** Section 8 — Promise centered photo */
  promise: "/images/couple/promise.png",
} as const;

/** Background music — YouTube video ID (Libu-Libong Buwan piano cover) */
export const musicYoutubeId = "xo7JOM3mgbk";

/** Optional local MP3 fallback if you add a file to public/music/ */
export const musicSrc = "/music/background.mp3";

export const adventureLabels = [
  "Laiya Trip",
  "Mindoro Trip",
  "Beach Day",
  "Ferry Ride",
] as const;

export const foodTripLabels = [
  "Hotpot Date",
  "Ramen & Sashimi",
  "Korean BBQ",
  "Ramen & Sushi",
  "Café Rice Bowl",
  "Bibimbap",
  "Kagaribi",
  "Seafood House",
] as const;