export const SITE = {
  name: "Anuka Tour & Travels",
  shortName: "Anuka",
  tagline: "Premium tours, transfers & bespoke holidays",
  whatsapp: "919121878363",
  email: "concierge@anukatravels.com",
  phone: "+91 91218 78363",
  instagram: "https://instagram.com",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
