exports.handler = function (event, context, callback) {
  const resources = {
    colors: [
      {
        name: "Eggradients",
        link: "https://www.eggradients.com/",
        description:
          "Ready to use gradient background colors. Cool Gradients are prepared according to the latest design trends. And it is served in the form of eggs. With hex and CSS codes.",
      },
      {
        name: "Colorffy",
        link: "https://colorffy.com/",
        description:
          "Create many gradients and palettes or save one of many color schemes, for everyone who needs colors.",
      },
      {
        name: "Gradient",
        link: "https://gradienthunt.com",
        description:
          "Thousands of trendy color gradients in a curated collection that is updated daily. Get a fresh color gradient for your next design project and save all the gradients you like.",
      },
    ],
    inspirations: [
      {
        name: "UI HUT",
        link: "https://www.uihut.com",
        description:
          "Download thousands of templates, illustrations, icons, and ui design kits for web and mobile app design without paying designer prices.",
      },
      {
        name: "Mobbin",
        link: "https://mobbin.design",
        description:
          "Check out the hand-picked collection of latest mobile design patterns from apps that reflect the best in design.",
      },
    ],
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(resources),
  });
};
