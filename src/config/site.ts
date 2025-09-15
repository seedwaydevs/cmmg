type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    library: string;
    facebook: string;
    instagram: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "CMMG Website",
  description:
    "Content, Music and Media Group is a record label dedicated to creating music that shapes and inspires the cultural scene.",
  url: "https://www.cmmg.co.za/",
  ogImage: "https://www.cmmg.co.za/og",
  links: {
    library: "https://www.library.cmmg.co.za/",
    facebook: "/",
    instagram: "/",
  },
};
