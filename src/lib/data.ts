import kashmir from "@/assets/dest-kashmir.jpg";
import goa from "@/assets/dest-goa.jpg";
import manali from "@/assets/dest-manali.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import andaman from "@/assets/dest-andaman.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import bali from "@/assets/dest-bali.jpg";
import thailand from "@/assets/dest-thailand.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import singapore from "@/assets/dest-singapore.jpg";
import switzerland from "@/assets/dest-switzerland.jpg";

import expHoneymoon from "@/assets/exp-honeymoon.jpg";
import expFamily from "@/assets/exp-family.jpg";
import expAdventure from "@/assets/exp-adventure.jpg";
import expLuxury from "@/assets/exp-luxury.jpg";

export type Destination = {
  slug: string;
  name: string;
  region: "Domestic" | "International";
  tagline: string;
  image: string;
  from: number; // INR
  nights: string;
  highlights: string[];
};

export const destinations: Destination[] = [
  { slug: "kashmir", name: "Kashmir", region: "Domestic", tagline: "Paradise on Earth", image: kashmir, from: 24999, nights: "5N / 6D", highlights: ["Dal Lake shikara", "Gulmarg gondola", "Pahalgam meadows"] },
  { slug: "goa", name: "Goa", region: "Domestic", tagline: "Sun, sand & sundowners", image: goa, from: 14999, nights: "3N / 4D", highlights: ["Beach resorts", "Cruise dinner", "Dudhsagar falls"] },
  { slug: "manali", name: "Manali", region: "Domestic", tagline: "Snowfall & pine valleys", image: manali, from: 16999, nights: "4N / 5D", highlights: ["Solang adventure", "Rohtang snow", "Old Manali cafes"] },
  { slug: "kerala", name: "Kerala", region: "Domestic", tagline: "God's own backwaters", image: kerala, from: 21999, nights: "5N / 6D", highlights: ["Alleppey houseboat", "Munnar tea hills", "Ayurveda spa"] },
  { slug: "ladakh", name: "Ladakh", region: "Domestic", tagline: "Land of high passes", image: ladakh, from: 32999, nights: "6N / 7D", highlights: ["Pangong Lake", "Nubra dunes", "Magnetic Hill"] },
  { slug: "rajasthan", name: "Rajasthan", region: "Domestic", tagline: "Royal heritage trail", image: rajasthan, from: 22999, nights: "6N / 7D", highlights: ["Jaipur palaces", "Udaipur lakes", "Jaisalmer dunes"] },
  { slug: "andaman", name: "Andaman", region: "Domestic", tagline: "Turquoise island bliss", image: andaman, from: 28999, nights: "5N / 6D", highlights: ["Radhanagar beach", "Scuba diving", "Havelock Island"] },
  { slug: "dubai", name: "Dubai", region: "International", tagline: "Skylines & desert luxury", image: dubai, from: 49999, nights: "5N / 6D", highlights: ["Burj Khalifa", "Desert safari", "Dhow cruise"] },
  { slug: "bali", name: "Bali", region: "International", tagline: "Tropical island serenity", image: bali, from: 54999, nights: "6N / 7D", highlights: ["Ubud rice fields", "Private villa", "Nusa islands"] },
  { slug: "thailand", name: "Thailand", region: "International", tagline: "Beaches, temples & nightlife", image: thailand, from: 39999, nights: "6N / 7D", highlights: ["Phi Phi cruise", "Krabi beaches", "Bangkok shopping"] },
  { slug: "maldives", name: "Maldives", region: "International", tagline: "Overwater honeymoon", image: maldives, from: 89999, nights: "4N / 5D", highlights: ["Water villa", "Sunset cruise", "Snorkel reefs"] },
  { slug: "singapore", name: "Singapore", region: "International", tagline: "Futuristic family fun", image: singapore, from: 64999, nights: "5N / 6D", highlights: ["Marina Bay", "Universal Studios", "Sentosa"] },
  { slug: "switzerland", name: "Switzerland", region: "International", tagline: "Alpine fairytale", image: switzerland, from: 149999, nights: "7N / 8D", highlights: ["Glacier Express", "Jungfraujoch", "Lake Lucerne"] },
];

export type Pkg = {
  slug: string;
  title: string;
  category: "Honeymoon" | "Family" | "Adventure" | "Group" | "International" | "Weekend";
  duration: string;
  from: number;
  rating: number;
  image: string;
  highlights: string[];
};

export const packages: Pkg[] = [
  { slug: "maldives-honeymoon", title: "Maldives Overwater Honeymoon", category: "Honeymoon", duration: "5 Days · 4 Nights", from: 89999, rating: 4.9, image: maldives, highlights: ["Water villa", "Candlelight dinner", "Couple spa"] },
  { slug: "kerala-family", title: "Kerala Backwaters Family Escape", category: "Family", duration: "6 Days · 5 Nights", from: 21999, rating: 4.8, image: kerala, highlights: ["Houseboat", "Munnar tea estate", "Wildlife safari"] },
  { slug: "ladakh-bike", title: "Ladakh Himalayan Bike Adventure", category: "Adventure", duration: "8 Days · 7 Nights", from: 38999, rating: 4.9, image: ladakh, highlights: ["Khardung La", "Pangong camping", "Royal Enfield"] },
  { slug: "bali-group", title: "Bali Group Getaway", category: "Group", duration: "7 Days · 6 Nights", from: 54999, rating: 4.8, image: bali, highlights: ["Private villa", "Volcano sunrise", "Beach club"] },
  { slug: "switzerland-luxury", title: "Switzerland Alpine Express", category: "International", duration: "8 Days · 7 Nights", from: 149999, rating: 5.0, image: switzerland, highlights: ["Glacier Express", "Jungfraujoch", "Lake Lucerne"] },
  { slug: "goa-weekend", title: "Goa Weekend Beach Break", category: "Weekend", duration: "3 Days · 2 Nights", from: 9999, rating: 4.7, image: goa, highlights: ["Beach resort", "Cruise dinner", "Water sports"] },
  { slug: "dubai-family", title: "Dubai Family Fiesta", category: "Family", duration: "6 Days · 5 Nights", from: 49999, rating: 4.8, image: dubai, highlights: ["Burj Khalifa", "Desert safari", "Theme parks"] },
  { slug: "andaman-honeymoon", title: "Andaman Island Romance", category: "Honeymoon", duration: "6 Days · 5 Nights", from: 32999, rating: 4.8, image: andaman, highlights: ["Havelock villa", "Scuba dive", "Sunset cruise"] },
  { slug: "thailand-explorer", title: "Thailand Island Explorer", category: "International", duration: "7 Days · 6 Nights", from: 39999, rating: 4.7, image: thailand, highlights: ["Phi Phi", "Krabi", "Bangkok"] },
];

export const experiences = [
  { title: "Luxury Stays", desc: "Five-star resorts, private villas, and overwater suites curated by hand.", image: expLuxury },
  { title: "Honeymoon Escapes", desc: "Romantic getaways with candlelit dinners and private moments.", image: expHoneymoon },
  { title: "Family Adventures", desc: "Stress-free, kid-friendly itineraries the whole family will love.", image: expFamily },
  { title: "Mountain Treks", desc: "Sunrise summits, alpine lakes, and untouched Himalayan trails.", image: expAdventure },
];

export const testimonials = [
  { name: "Aarav & Priya Mehta", trip: "Maldives Honeymoon", rating: 5, quote: "Voyageluxe planned every minute. The water villa, the private dinner — magical. Felt truly bespoke.", avatar: "https://i.pravatar.cc/120?img=12" },
  { name: "Rohit Khanna", trip: "Ladakh Bike Trip", rating: 5, quote: "Best trip of my life. Logistics were perfect, bikes were brand new, and the route was unreal.", avatar: "https://i.pravatar.cc/120?img=33" },
  { name: "Sneha Iyer", trip: "Bali with Friends", rating: 5, quote: "Felt like we were travelling with insiders. Every villa, every restaurant — just incredible taste.", avatar: "https://i.pravatar.cc/120?img=47" },
  { name: "The Sharma Family", trip: "Switzerland", rating: 5, quote: "From Glacier Express to Jungfrau, everything was seamless. Kids still talk about it daily.", avatar: "https://i.pravatar.cc/120?img=5" },
];
