/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://localhost:3000/",
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://localhost:3000/server-sitemap.xml"],
  },
};

module.exports = config;
