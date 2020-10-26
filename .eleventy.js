const htmlCss = require("./_data/htmlCssWorks");
const jsWork = require("./_data/jsWorks");
const vueWork = require("./_data/vueWorks");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./css");

  eleventyConfig.addCollection("featured", function() {
    let arr1 = htmlCss.filter((el) => el.isFeat == true);
    let arr2 = jsWork.filter((el) => el.isFeat == true);
    let arr3 = vueWork.filter((el) => el.isFeat == true);
    return [...arr1,...arr2,...arr3];
  });
};