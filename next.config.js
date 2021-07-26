module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.map((rule) => JSON.stringify(rule));
    return config;
  },
};
