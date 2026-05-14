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
  // Domestic — focused India regions only
  { slug: "himachal-pradesh", name: "Himachal Pradesh", region: "Domestic", zone: "North", tagline: "Snow valleys, pine forests & Himalayan towns", image: manali, from: 11999, nights: "Shimla · Manali · Kasol · Dharamshala", highlights: ["Solang & Rohtang snow", "Mall Road Shimla", "Kasol river cafés", "McLeodganj"], bestTime: "Oct – Mar (Snow) · Apr – Jun" },
  { slug: "rajasthan", name: "Rajasthan", region: "Domestic", zone: "West", tagline: "Royal palaces, golden dunes & living forts", image: rajasthan, from: 9999, nights: "Jaipur · Udaipur · Jaisalmer · Pushkar", highlights: ["Amber Fort", "Lake Pichola", "Sam Sand Dunes", "Pushkar Lake"], bestTime: "Oct – Mar" },
  { slug: "uttarakhand", name: "Uttarakhand", region: "Domestic", zone: "North", tagline: "Devbhoomi — sacred rivers & Himalayan retreats", image: ladakh, from: 7999, nights: "Mussoorie · Nainital · Rishikesh · Auli", highlights: ["Naini Lake", "Ganga Aarti", "River rafting", "Auli skiing"], bestTime: "Mar – Jun · Sep – Nov" },
  { slug: "ladakh", name: "Ladakh", region: "Domestic", zone: "North", tagline: "Land of high passes & turquoise lakes", image: ladakh, from: 18999, nights: "Leh · Nubra · Pangong · Magnetic Hill", highlights: ["Pangong Lake", "Khardung La", "Nubra dunes", "Leh monasteries"], bestTime: "Jun – Sep" },
  { slug: "jammu-kashmir", name: "Jammu & Kashmir", region: "Domestic", zone: "North", tagline: "Paradise on Earth — meadows, lakes & gondolas", image: kashmir, from: 13999, nights: "Srinagar · Gulmarg · Sonmarg · Pahalgam", highlights: ["Dal Lake shikara", "Gulmarg gondola", "Betaab Valley", "Thajiwas glacier"], bestTime: "Mar – Oct · Dec – Feb (Snow)" },

  // International
  { slug: "dubai", name: "Dubai", region: "International", tagline: "Skylines & desert luxury", image: dubai, from: 49999, nights: "5N / 6D", highlights: ["Burj Khalifa", "Desert safari", "Dhow cruise"] },
  { slug: "bali", name: "Bali", region: "International", tagline: "Tropical island serenity", image: bali, from: 54999, nights: "6N / 7D", highlights: ["Ubud rice fields", "Private villa", "Nusa islands"] },
  { slug: "thailand", name: "Thailand", region: "International", tagline: "Beaches, temples & nightlife", image: thailand, from: 39999, nights: "6N / 7D", highlights: ["Phi Phi cruise", "Krabi beaches", "Bangkok shopping"] },
  { slug: "maldives", name: "Maldives", region: "International", tagline: "Overwater honeymoon", image: maldives, from: 89999, nights: "4N / 5D", highlights: ["Water villa", "Sunset cruise", "Snorkel reefs"] },
  { slug: "singapore", name: "Singapore", region: "International", tagline: "Futuristic family fun", image: singapore, from: 64999, nights: "5N / 6D", highlights: ["Marina Bay", "Universal Studios", "Sentosa"] },
  { slug: "switzerland", name: "Switzerland", region: "International", tagline: "Alpine fairytale", image: switzerland, from: 149999, nights: "7N / 8D", highlights: ["Glacier Express", "Jungfraujoch", "Lake Lucerne"] },
];

export const REGIONS = {
  "himachal-pradesh": { slug: "himachal-pradesh", title: "Himachal Pradesh", desc: "Shimla, Manali, Kasol & Dharamshala — snow valleys & pine forests.", image: manali },
  rajasthan: { slug: "rajasthan", title: "Rajasthan", desc: "Jaipur, Udaipur, Jaisalmer, Mount Abu & Pushkar — royal heritage trail.", image: rajasthan },
  uttarakhand: { slug: "uttarakhand", title: "Uttarakhand", desc: "Mussoorie, Nainital, Rishikesh, Haridwar & Auli — Devbhoomi escapes.", image: ladakh },
  ladakh: { slug: "ladakh", title: "Ladakh", desc: "Leh, Nubra Valley, Pangong Lake & Magnetic Hill — high-altitude wonderland.", image: ladakh },
  "jammu-kashmir": { slug: "jammu-kashmir", title: "Jammu & Kashmir", desc: "Srinagar, Gulmarg, Sonmarg & Pahalgam — paradise on earth.", image: kashmir },
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
  { slug: "manali-snow", title: "Manali Snow Escape", category: "Family", duration: "5 Days · 4 Nights", from: 16999, rating: 4.8, image: manali, highlights: ["Solang Valley", "Rohtang snow", "Old Manali"] },
  { slug: "shimla-manali-honeymoon", title: "Shimla – Manali Honeymoon", category: "Honeymoon", duration: "6 Days · 5 Nights", from: 22999, rating: 4.9, image: manali, highlights: ["Mall Road", "Kufri", "Solang ropeway"] },
  { slug: "rajasthan-royal", title: "Royal Rajasthan Heritage Trail", category: "Family", duration: "7 Days · 6 Nights", from: 24999, rating: 4.8, image: rajasthan, highlights: ["Jaipur palaces", "Udaipur lakes", "Jaisalmer dunes"] },
  { slug: "ladakh-bike", title: "Ladakh Himalayan Bike Adventure", category: "Adventure", duration: "8 Days · 7 Nights", from: 38999, rating: 4.9, image: ladakh, highlights: ["Khardung La", "Pangong camping", "Royal Enfield"] },
  { slug: "kashmir-paradise", title: "Kashmir Paradise — Srinagar to Gulmarg", category: "Family", duration: "6 Days · 5 Nights", from: 24999, rating: 4.9, image: kashmir, highlights: ["Dal Lake shikara", "Gulmarg gondola", "Pahalgam meadows"] },
  { slug: "uttarakhand-chardham", title: "Uttarakhand Hills & Rishikesh", category: "Group", duration: "6 Days · 5 Nights", from: 17999, rating: 4.7, image: ladakh, highlights: ["Nainital", "Mussoorie", "Rishikesh rafting"] },
  { slug: "auli-ski", title: "Auli Skiing Special", category: "Adventure", duration: "5 Days · 4 Nights", from: 19999, rating: 4.8, image: ladakh, highlights: ["Auli ropeway", "Ski slopes", "Nanda Devi views"] },
  { slug: "switzerland-luxury", title: "Switzerland Alpine Express", category: "International", duration: "8 Days · 7 Nights", from: 149999, rating: 5.0, image: switzerland, highlights: ["Glacier Express", "Jungfraujoch", "Lake Lucerne"] },
  { slug: "dubai-family", title: "Dubai Family Fiesta", category: "International", duration: "6 Days · 5 Nights", from: 49999, rating: 4.8, image: dubai, highlights: ["Burj Khalifa", "Desert safari", "Theme parks"] },
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

// State-wise India tour packages (detailed cities)
export type CityPackage = {
  city: string;
  tagline: string;
  duration: string;
  from: number;
  highlights: string[];
  hotels: string;
  image: string;
};

export type IndiaStateTours = {
  slug: string;
  state: string;
  tagline: string;
  bestTime: string;
  banner: string;
  cities: CityPackage[];
};

export const indiaStates: IndiaStateTours[] = [
  {
    slug: "himachal-pradesh",
    state: "Himachal Pradesh",
    tagline: "Snow valleys, pine forests & Himalayan towns",
    bestTime: "Oct – Mar (Snow) · Apr – Jun (Pleasant)",
    banner: manali,
    cities: [
      { city: "Shimla", tagline: "Queen of the Hills", duration: "3 Nights / 4 Days", from: 12999, highlights: ["Mall Road", "Kufri snow point", "Jakhu Temple", "Toy Train"], hotels: "3★/4★ hotels · daily breakfast & dinner · sightseeing by cab", image: manali },
      { city: "Kullu", tagline: "Valley of Gods", duration: "3 Nights / 4 Days", from: 11999, highlights: ["River rafting", "Great Himalayan NP", "Bijli Mahadev", "Shawl factories"], hotels: "Riverside resorts · breakfast + dinner · private transport", image: manali },
      { city: "Manali", tagline: "Snowfall & pine valleys", duration: "4 Nights / 5 Days", from: 16999, highlights: ["Solang Valley", "Rohtang Pass", "Hadimba Temple", "Old Manali cafés"], hotels: "Premium hotels · MAP plan · Volvo / cab transfers", image: manali },
      { city: "Kasol", tagline: "Mini Israel of India", duration: "2 Nights / 3 Days", from: 9999, highlights: ["Parvati river", "Tosh village", "Kheerganga trek", "Cafés & treks"], hotels: "Boutique riverside stays · breakfast · local sightseeing", image: manali },
      { city: "Dharamshala", tagline: "Home of the Dalai Lama", duration: "3 Nights / 4 Days", from: 13999, highlights: ["McLeodganj", "Bhagsu Falls", "Triund trek", "Dal Lake"], hotels: "3★/4★ stays · breakfast + dinner · cab sightseeing", image: manali },
    ],
  },
  {
    slug: "rajasthan",
    state: "Rajasthan",
    tagline: "Royal palaces, golden dunes & living forts",
    bestTime: "Oct – Mar",
    banner: rajasthan,
    cities: [
      { city: "Jaipur", tagline: "The Pink City", duration: "2 Nights / 3 Days", from: 9999, highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Jal Mahal"], hotels: "Heritage / 4★ hotels · breakfast · AC cab", image: rajasthan },
      { city: "Udaipur", tagline: "City of Lakes", duration: "3 Nights / 4 Days", from: 14999, highlights: ["Lake Pichola boat", "City Palace", "Sajjangarh", "Jagdish Temple"], hotels: "Lake-view hotels · breakfast + dinner · private transport", image: rajasthan },
      { city: "Jaisalmer", tagline: "The Golden City", duration: "3 Nights / 4 Days", from: 15999, highlights: ["Sam Sand Dunes", "Camel safari", "Desert camp", "Jaisalmer Fort"], hotels: "Desert luxury camps · all meals · cultural night", image: rajasthan },
      { city: "Mount Abu", tagline: "Rajasthan's only hill station", duration: "2 Nights / 3 Days", from: 10999, highlights: ["Nakki Lake", "Dilwara Temples", "Sunset Point", "Guru Shikhar"], hotels: "Hill-view resorts · breakfast + dinner · cab transfers", image: rajasthan },
      { city: "Pushkar", tagline: "Sacred lake town", duration: "2 Nights / 3 Days", from: 8999, highlights: ["Brahma Temple", "Pushkar Lake", "Camel ride", "Local bazaars"], hotels: "Boutique heritage stays · breakfast · sightseeing", image: rajasthan },
    ],
  },
  {
    slug: "uttarakhand",
    state: "Uttarakhand",
    tagline: "Devbhoomi — sacred rivers & Himalayan retreats",
    bestTime: "Mar – Jun · Sep – Nov",
    banner: ladakh,
    cities: [
      { city: "Mussoorie", tagline: "Queen of the Hills", duration: "2 Nights / 3 Days", from: 9999, highlights: ["Kempty Falls", "Mall Road", "Gun Hill ropeway", "Lal Tibba"], hotels: "Hill-view 3★/4★ stays · breakfast · cab sightseeing", image: ladakh },
      { city: "Nainital", tagline: "Lake district of India", duration: "3 Nights / 4 Days", from: 12999, highlights: ["Naini Lake boating", "Snow View Point", "Tiffin Top", "Mall Road"], hotels: "Lake-view hotels · breakfast + dinner · transfers", image: ladakh },
      { city: "Rishikesh", tagline: "Yoga capital of the world", duration: "2 Nights / 3 Days", from: 8999, highlights: ["Ganga Aarti", "River rafting", "Lakshman Jhula", "Yoga sessions"], hotels: "Riverside camps / hotels · breakfast · activities", image: ladakh },
      { city: "Haridwar", tagline: "Gateway to the gods", duration: "2 Nights / 3 Days", from: 7999, highlights: ["Har Ki Pauri", "Ganga Aarti", "Mansa Devi temple", "Chandi Devi"], hotels: "Ganga-view hotels · breakfast + dinner · cab", image: ladakh },
      { city: "Auli", tagline: "Skiing paradise of India", duration: "3 Nights / 4 Days", from: 16999, highlights: ["Auli ropeway", "Skiing slopes", "Nanda Devi views", "Gurso Bugyal"], hotels: "Ski resorts · all meals · ropeway included", image: ladakh },
    ],
  },
  {
    slug: "ladakh",
    state: "Ladakh",
    tagline: "Land of high passes & turquoise lakes",
    bestTime: "Jun – Sep",
    banner: ladakh,
    cities: [
      { city: "Leh", tagline: "Cold desert capital", duration: "3 Nights / 4 Days", from: 18999, highlights: ["Leh Palace", "Shanti Stupa", "Local monasteries", "Acclimatization day"], hotels: "Premium Leh hotels · breakfast + dinner · oxygen support", image: ladakh },
      { city: "Nubra Valley", tagline: "Valley of flowers & dunes", duration: "2 Nights / 3 Days", from: 12999, highlights: ["Khardung La Pass", "Hunder dunes", "Double-hump camel", "Diskit Monastery"], hotels: "Luxury camps / hotels · all meals · permits included", image: ladakh },
      { city: "Pangong Lake", tagline: "Bluest lake in the Himalayas", duration: "1 Night / 2 Days", from: 8999, highlights: ["Lakeside camp", "Sunrise at Pangong", "Chang La Pass", "3 Idiots point"], hotels: "Premium lake camps · all meals · campfire", image: ladakh },
      { city: "Magnetic Hill", tagline: "Gravity-defying wonder", duration: "Day Trip", from: 3999, highlights: ["Magnetic Hill", "Gurudwara Pathar Sahib", "Sangam point", "Hall of Fame"], hotels: "Day excursion from Leh · cab + guide", image: ladakh },
    ],
  },
  {
    slug: "jammu-kashmir",
    state: "Jammu & Kashmir",
    tagline: "Paradise on Earth — meadows, lakes & gondolas",
    bestTime: "Mar – Oct (Spring/Summer) · Dec – Feb (Snow)",
    banner: kashmir,
    cities: [
      { city: "Srinagar", tagline: "City of lakes & shikaras", duration: "3 Nights / 4 Days", from: 13999, highlights: ["Dal Lake shikara", "Mughal Gardens", "Shankaracharya Temple", "Houseboat stay"], hotels: "Deluxe houseboat + 4★ hotel · breakfast + dinner", image: kashmir },
      { city: "Gulmarg", tagline: "Meadow of flowers & ski slopes", duration: "2 Nights / 3 Days", from: 12999, highlights: ["Gondola ride Phase 1 & 2", "Skiing in winter", "Apharwat Peak", "Golf course"], hotels: "Ski resorts / 4★ stays · breakfast + dinner", image: kashmir },
      { city: "Sonmarg", tagline: "Meadow of gold", duration: "1 Night / 2 Days", from: 8999, highlights: ["Thajiwas Glacier", "Pony ride", "Zoji La views", "River walks"], hotels: "Riverside hotels · breakfast + dinner · cab", image: kashmir },
      { city: "Pahalgam", tagline: "Valley of shepherds", duration: "2 Nights / 3 Days", from: 11999, highlights: ["Aru Valley", "Betaab Valley", "Chandanwari", "Lidder river"], hotels: "Valley-view 3★/4★ stays · breakfast + dinner · sightseeing", image: kashmir },
    ],
  },
];
