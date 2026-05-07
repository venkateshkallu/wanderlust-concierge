export const SITE = {
  name: "Voyageluxe",
  tagline: "Curated journeys for modern Indian travelers",
  whatsapp: "919121878363", // +91 9121878363
  email: "concierge@voyageluxe.in",
  phone: "+91 91218 78363",
  instagram: "https://instagram.com",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
