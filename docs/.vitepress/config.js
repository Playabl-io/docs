/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: "Playabl Docs",
  description: "Get started building a community or playing in games",
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: "Playabl for Communities",
        collapsible: true,
        items: [
          {
            text: "Getting Started",
            link: "/communities/getting-started.md",
          },
          {
            text: "Managing Members",
            link: "/communities/managing-members.md",
          },
          {
            text: "Access Levels",
            link: "/communities/access-levels.md",
          },
          {
            text: "Calendar Cutoff",
            link: "/communities/calendar-cutoff.md",
          },
          {
            text: "Invite Links",
            link: "/communities/invite-links.md",
          },
        ],
      },
      { text: "Playabl for Players", items: [] },
    ],
  },
};
export default config;
