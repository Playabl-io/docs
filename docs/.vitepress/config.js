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
        text: "Guides",
        items: [
          {
            text: "Finding and joining communities",
            link: "/guides/communities/finding-communities.md",
          },
          {
            text: "Finding and joining games",
            link: "/guides/games/finding-games.md",
          },
          {
            text: "Creating games",
            link: "/guides/games/creating-games.md",
          },
          {
            text: "Starting a community",
            link: "/guides/communities/starting-a-community.md",
          },
          {
            text: "Access Levels",
            link: "/guides/communities/access-levels.md",
          },
          {
            text: "Calendar Cutoff",
            link: "/guides/communities/calendar-cutoff.md",
          },
          {
            text: "Invite Links",
            link: "/guides/communities/invite-links.md",
          },
          {
            text: "Managing Members",
            link: "/guides/communities/managing-members.md",
          },
          {
            text: "Running a community event",
            link: "/guides/events/running-events.md",
          },
        ],
      },
    ],
  },
};
export default config;
