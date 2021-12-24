const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const handlebars = require("handlebars");

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary("hbs", handlebars);
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir: { input: "src/view", output: "public", data: "_data" },
    passthroughFileCopy: false,
    templateFormats: ["hbs", "md", "css", "html", "yml"],
    htmlTemplateEngine: "hbs",
  };
};
