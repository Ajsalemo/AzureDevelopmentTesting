module.exports = {
  apps: [
    {
      name: "vue",
      script: "serve",
      env: {
        NODE_ENV: "development",
        PM2_SERVE_PATH: "./dist",
        PM2_SERVE_SPA: "true",
      },
      env_production: {
        NODE_ENV: "production",
        PM2_SERVE_PATH: "./dist",
        PM2_SERVE_SPA: "true",
      },
    },
  ],
};
