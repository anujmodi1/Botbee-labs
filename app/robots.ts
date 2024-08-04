export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: "https://botbee-labs.vercel.app/sitemap.xml",
    host: "https://botbee-labs.vercel.app/",
  };
}
