const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@screens": path.resolve(__dirname, "src/screens/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@contexts": path.resolve(__dirname, "src/contexts/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
    }
  }
}