/** @type {import('next').NextConfig} */

function getConfig(config) {
  return config;
}

module.exports = getConfig({
  images: {
    domains: [
      "s3.amazonaws.com",
      "scontent.cdninstagram.com",
      "i.pinimg.com",
      "cdn.shopify.com",
    ],
  },
});
