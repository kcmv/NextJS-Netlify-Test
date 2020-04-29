module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/index.js" },
      "/post/:id": { page: "/post/[id].js" },
      // etc...
    }
  },
}
