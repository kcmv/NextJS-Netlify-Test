module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/post/:id": { page: "/post/[id].js" },
      // etc...
    }
  },
}
