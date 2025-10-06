const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: isProd ? "/Ethan-Hall-Protfolio" : undefined,
  basePath: isProd ? "/Ethan-Hall-Protfolio" : undefined,
};

export default nextConfig;
