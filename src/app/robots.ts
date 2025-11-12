export const baseUrl = "https://cr-cycle-crm.vercel.app/";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    // sitemap: `${baseUrl}/sitemap.xml`,
  };
}
