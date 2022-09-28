/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

// new code to do transpilation of some threejs things
const withTM = require("next-transpile-modules")(["three"]);
// doesnt this obviate the old `module.exports = nextConfig;` above?
module.exports = withTM();
