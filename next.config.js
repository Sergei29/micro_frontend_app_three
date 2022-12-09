const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: "frontend_three",
        filename: "static/chunks/remoteEntry_3.js",
        remotes: {
          frontend_one: `frontend_one@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          frontend_two: `frontend_two@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry_2.js`,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
