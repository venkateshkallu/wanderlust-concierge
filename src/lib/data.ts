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
  zone?: "North" | "South" | "East" | "West";
  tagline: string;
  image: string;
  from: number;
  nights: string;
  highlights: string[];
  bestTime?: string;
};

export const destinations: Destination[] = [
  // North
  { slug: "kashmir", name: "Kashmir", region: "Domestic", zone: "North", tagline: "Paradise on Earth", image: kashmir, from: 24999, nights: "5N / 6D", highlights: ["Dal Lake shikara", "Gulmarg gondola", "Pahalgam meadows"], bestTime: "Mar – Oct" },
  { slug: "manali", name: "Manali", region: "Domestic", zone: "North", tagline: "Snowfall & pine valleys", image: manali, from: 16999, nights: "4N / 5D", highlights: ["Solang adventure", "Rohtang snow", "Old Manali cafes"], bestTime: "Oct – Mar" },
  { slug: "ladakh", name: "Ladakh", region: "Domestic", zone: "North", tagline: "Land of high passes", image: ladakh, from: 32999, nights: "6N / 7D", highlights: ["Pangong Lake", "Nubra dunes", "Magnetic Hill"], bestTime: "Jun – Sep" },
  { slug: "shimla", name: "Shimla", region: "Domestic", zone: "North", tagline: "Queen of the hills", image: manali, from: 14999, nights: "4N / 5D", highlights: ["Mall Road", "Kufri snow", "Toy train"], bestTime: "Year-round" },

  // South
  { slug: "kerala", name: "Kerala", region: "Domestic", zone: "South", tagline: "God's own backwaters", image: kerala, from: 21999, nights: "5N / 6D", highlights: ["Alleppey houseboat", "Munnar tea hills", "Ayurveda spa"], bestTime: "Sep – Mar" },
  { slug: "coorg", name: "Coorg", region: "Domestic", zone: "South", tagline: "Scotland of India", image: kerala, from: 13999, nights: "3N / 4D", highlights: ["Coffee plantations", "Abbey Falls", "Raja's Seat"], bestTime: "Oct – Mar" },
  { slug: "ooty", name: "Ooty", region: "Domestic", zone: "South", tagline: "Nilgiri queen of hills", image: kerala, from: 12999, nights: "3N / 4D", highlights: ["Botanical garden", "Doddabetta peak", "Tea museum"], bestTime: "Oct – Jun" },
  { slug: "goa", name: "Goa", region: "Domestic", zone: "South", tagline: "Sun, sand & sundowners", image: goa, from: 14999, nights: "3N / 4D", highlights: ["Beach resorts", "Cruise dinner", "Dudhsagar falls"], bestTime: "Nov – Feb" },

  // East
  { slug: "sikkim", name: "Sikkim", region: "Domestic", zone: "East", tagline: "Himalayan wilderness", image: ladakh, from: 19999, nights: "5N / 6D", highlights: ["Tsomgo Lake", "Nathula Pass", "Gangtok"], bestTime: "Mar – Jun" },
  { slug: "darjeeling", name: "Darjeeling", region: "Domestic", zone: "East", tagline: "Tea hills & toy trains", image: manali, from: 15999, nights: "4N / 5D", highlights: ["Tiger Hill sunrise", "Toy train", "Tea estates"], bestTime: "Oct – Mar" },
  { slug: "meghalaya", name: "Meghalaya", region: "Domestic", zone: "East", tagline: "Abode of the clouds", image: kerala, from: 22999, nights: "5N / 6D", highlights: ["Living root bridges", "Dawki river", "Cherrapunji"], bestTime: "Oct – Apr" },

  // West
  { slug: "rajasthan", name: "Rajasthan", region: "Domestic", zone: "West", tagline: "Royal heritage trail", image: rajasthan, from: 22999, nights: "6N / 7D", highlights: ["Jaipur palaces", "Udaipur lakes", "Jaisalmer dunes"], bestTime: "Oct – Mar" },
  { slug: "gujarat", name: "Gujarat", region: "Domestic", zone: "West", tagline: "White Rann & lions", image: rajasthan, from: 18999, nights: "5N / 6D", highlights: ["Rann of Kutch", "Statue of Unity", "Gir lions"], bestTime: "Nov – Feb" },
  { slug: "mumbai", name: "Mumbai", region: "Domestic", zone: "West", tagline: "City that never sleeps", image: goa, from: 11999, nights: "3N / 4D", highlights: ["Gateway of India", "Marine Drive", "Elephanta caves"], bestTime: "Nov – Feb" },
  { slug: "andaman", name: "Andaman", region: "Domestic", tagline: "Turquoise island bliss", image: andaman, from: 28999, nights: "5N / 6D", highlights: ["Radhanagar beach", "Scuba diving", "Havelock Island"], bestTime: "Oct – May" },

  // International
  { slug: "dubai", name: "Dubai", region: "International", tagline: "Skylines & desert luxury", image: dubai, from: 49999, nights: "5N / 6D", highlights: ["Burj Khalifa", "Desert safari", "Dhow cruise"] },
  { slug: "bali", name: "Bali", region: "International", tagline: "Tropical island serenity", image: bali, from: 54999, nights: "6N / 7D", highlights: ["Ubud rice fields", "Private villa", "Nusa islands"] },
  { slug: "thailand", name: "Thailand", region: "International", tagline: "Beaches, temples & nightlife", image: thailand, from: 39999, nights: "6N / 7D", highlights: ["Phi Phi cruise", "Krabi beaches", "Bangkok shopping"] },
  { slug: "maldives", name: "Maldives", region: "International", tagline: "Overwater honeymoon", image: maldives, from: 89999, nights: "4N / 5D", highlights: ["Water villa", "Sunset cruise", "Snorkel reefs"] },
  { slug: "singapore", name: "Singapore", region: "International", tagline: "Futuristic family fun", image: singapore, from: 64999, nights: "5N / 6D", highlights: ["Marina Bay", "Universal Studios", "Sentosa"] },
  { slug: "switzerland", name: "Switzerland", region: "International", tagline: "Alpine fairytale", image: switzerland, from: 149999, nights: "7N / 8D", highlights: ["Glacier Express", "Jungfraujoch", "Lake Lucerne"] },
];

export const REGIONS = {
  north: { slug: "north", title: "North India", desc: "Snow-clad Himalayas, mughal gardens, and spiritual valleys.", zone: "North" as const },
  south: { slug: "south", title: "South India", desc: "Backwaters, hill stations, and sun-drenched beaches.", zone: "South" as const },
  east: { slug: "east", title: "East India", desc: "Tea hills, monasteries, and untouched wilderness.", zone: "East" as const },
  west: { slug: "west", title: "West India", desc: "Royal palaces, white deserts, and coastal cities.", zone: "West" as const },
};

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
  { name: "Aarav & Priya Mehta", trip: "Maldives Honeymoon", rating: 5, quote: "Voyago India planned every minute. The water villa, the private dinner — magical. Felt truly bespoke.", avatar: "https://i.pravatar.cc/120?img=12" },
  { name: "Rohit Khanna", trip: "Ladakh Bike Trip", rating: 5, quote: "Best trip of my life. Logistics were perfect, bikes were brand new, and the route was unreal.", avatar: "https://i.pravatar.cc/120?img=33" },
  { name: "Sneha Iyer", trip: "Bali with Friends", rating: 5, quote: "Felt like we were travelling with insiders. Every villa, every restaurant — just incredible taste.", avatar: "https://i.pravatar.cc/120?img=47" },
  { name: "The Sharma Family", trip: "Switzerland", rating: 5, quote: "From Glacier Express to Jungfrau, everything was seamless. Kids still talk about it daily.", avatar: "https://i.pravatar.cc/120?img=5" },
];

// Car & bus rentals
export type Vehicle = {
  slug: string;
  name: string;
  category: "Economy" | "Sedan" | "SUV" | "Luxury" | "Tempo Traveler" | "Bus";
  seats: number;
  ac: boolean;
  pricePerDay: number;
  perKm?: number;
  image: string;
  features: string[];
};

export const vehicles: Vehicle[] = [
  { slug: "swift-dzire", name: "Maruti Swift Dzire", category: "Economy", seats: 4, ac: true, pricePerDay: 2200, perKm: 12, image: goa, features: ["AC", "Petrol", "City + Outstation"] },
  { slug: "honda-amaze", name: "Honda Amaze", category: "Sedan", seats: 4, ac: true, pricePerDay: 2800, perKm: 14, image: rajasthan, features: ["AC", "Spacious boot", "Outstation"] },
  { slug: "toyota-innova", name: "Toyota Innova Crysta", category: "SUV", seats: 7, ac: true, pricePerDay: 4500, perKm: 18, image: manali, features: ["7-seater", "Premium SUV", "Hill-friendly"] },
  { slug: "fortuner", name: "Toyota Fortuner", category: "SUV", seats: 7, ac: true, pricePerDay: 6500, perKm: 22, image: ladakh, features: ["4x4", "Luxury SUV", "Long trips"] },
  { slug: "mercedes-eclass", name: "Mercedes E-Class", category: "Luxury", seats: 4, ac: true, pricePerDay: 14999, perKm: 60, image: dubai, features: ["Chauffeur driven", "Wedding / VIP", "Premium audio"] },
  { slug: "tempo-12", name: "Force Tempo Traveler 12+1", category: "Tempo Traveler", seats: 12, ac: true, pricePerDay: 7500, perKm: 25, image: kerala, features: ["12-seater", "Group travel", "Recliner seats"] },
  { slug: "tempo-17", name: "Tempo Traveler 17+1", category: "Tempo Traveler", seats: 17, ac: true, pricePerDay: 9500, perKm: 28, image: kashmir, features: ["17-seater", "Family + groups", "Push-back seats"] },
  { slug: "mini-bus", name: "Mini Bus 27 Seater", category: "Bus", seats: 27, ac: true, pricePerDay: 14500, image: bali, features: ["AC Bus", "Corporate / Tour", "TV + Music"] },
  { slug: "luxury-coach", name: "Volvo Luxury Coach 45", category: "Bus", seats: 45, ac: true, pricePerDay: 24999, image: switzerland, features: ["Sleeper / Seater", "Long-distance tours", "Onboard refreshments"] },
];

// Blogs
export type Blog = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readMins: number;
  image: string;
  excerpt: string;
};

export const blogs: Blog[] = [
  { slug: "kashmir-travel-guide", title: "The Ultimate Kashmir Travel Guide 2026", category: "Destination Guide", date: "May 1, 2026", readMins: 8, image: kashmir, excerpt: "Shikara rides, Gulmarg gondola, and the best time to visit Pahalgam — everything you need." },
  { slug: "goa-honeymoon-trip", title: "Goa Honeymoon: 5 Romantic Stays Under ₹25K", category: "Honeymoon", date: "Apr 22, 2026", readMins: 6, image: goa, excerpt: "Beachfront resorts, cruise dinners, and private villas perfect for newlyweds." },
  { slug: "bali-itinerary", title: "7-Day Bali Itinerary for First-Time Travelers", category: "Itinerary", date: "Apr 10, 2026", readMins: 10, image: bali, excerpt: "Ubud, Seminyak, Nusa Penida — a stress-free Bali plan with hidden gems." },
  { slug: "kerala-backwaters", title: "Kerala Backwaters: A Houseboat Diary", category: "Slow Travel", date: "Mar 28, 2026", readMins: 7, image: kerala, excerpt: "What it's really like to spend a night drifting through Alleppey's backwaters." },
  { slug: "dubai-luxury-trip", title: "Dubai in 5 Days: A Luxury Itinerary", category: "Luxury", date: "Mar 15, 2026", readMins: 9, image: dubai, excerpt: "Burj Khalifa dinners, desert safaris, and the best brunches in the city." },
  { slug: "sikkim-adventure", title: "Sikkim Adventure: Offbeat Routes & Treks", category: "Adventure", date: "Feb 28, 2026", readMins: 8, image: ladakh, excerpt: "From Goecha La to Yumthang — a guide to Sikkim's most cinematic trails." },
];
