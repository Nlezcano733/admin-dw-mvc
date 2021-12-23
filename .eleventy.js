const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir: { input: "src/view", output: "public", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["hbs", "md", "css", "html", "yml"],
    htmlTemplateEngine: "hbs",
  };
};
