const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // 去掉 `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
  console.log(basePath)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  // assetPrefix,
  output: 'export',
  distDir: '../out'
};

export default nextConfig;
