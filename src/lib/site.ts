export const SITE = {
  name: "Voyago India",
  tagline: "Premium tours, transfers & bespoke holidays",
  whatsapp: "919121878363", // +91 9121878363
  email: "concierge@voyagoindia.com",
  phone: "+91 91218 78363",
  instagram: "https://instagram.com",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
