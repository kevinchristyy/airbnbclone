/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "wallpapercave.com"],
  },
  experimental: {
    appDir: true,
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZ2hvc3RwaGFuYXRpYyIsImEiOiJjbGM2dWlvbjYwd3U5M3V3M2R6OHd0enFnIn0._uABTTXEMr8I3Tv5dyhLlA",
  },
};

module.exports = nextConfig;
