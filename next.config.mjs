const isProd = process.env.NODE_ENV === "production";

const repoName = "Ethan-Hall-Portfolio";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: isProd ? `/${repoName}` : undefined,
  basePath: isProd ? `/${repoName}` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
  },
};

export default nextConfig;
