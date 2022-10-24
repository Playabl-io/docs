/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: "Playabl Docs",
  description: "Get started build a community or playing in games",
  themeConfig: {
    sidebar: [
      {
        text: "Playabl for Communities",
        items: [
          {
            text: "Getting Started",
            link: "/communities/getting-started.md",
          },
          {
            text: "Access Levels",
            link: "/communities/access-levels.md",
          },
        ],
      },
      { text: "Playabl for Players", items: [] },
    ],
  },
};
export default config;
