const contentful = require("contentful");

// export const previewClient = contentful.createClient({
//   host: "preview.contentful.com",
//   space: "pj7x22ib97tl",
//   accessToken: "fmSNOxUeXE19RIXWC965YLKRSn8K6fUP0hkd2xjFZQY",
// });

// const contentfulConfig = {
//   spaceId: "pj7x22ib97tl",
//   accessToken: "1a0PlljNjVZK34YnAics_dEkcYf0w781_54i_tDznQ4",
// };

// export default contentfulConfig;

export const client = contentful.createClient({
  space: "pj7x22ib97tl",
  accessToken: "1a0PlljNjVZK34YnAics_dEkcYf0w781_54i_tDznQ4",
});
