/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isUserOrOrgPagesSite = repositoryName.endsWith(".github.io");
const githubPagesBasePath =
  isGitHubPages && repositoryName && !isUserOrOrgPagesSite ? `/${repositoryName}` : "";

const nextConfig = {
  output: "export",
  poweredByHeader: false,
  reactStrictMode: true,
  ...(githubPagesBasePath
    ? {
        assetPrefix: githubPagesBasePath,
        basePath: githubPagesBasePath
      }
    : {})
};

export default nextConfig;
