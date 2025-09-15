export const baseUrl = "http://localhost:3000";

export default async function sitemap() {
  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: new Date().toISOString().split("T")[0],
    },

    // Add more pages as you create them
  ];

  return routes;
}
