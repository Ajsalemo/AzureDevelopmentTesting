module.exports = {
  apps: [
    {
      name: "react",
      script: "serve",
      env: {
        NODE_ENV: "development",
        PM2_SERVE_PATH: "./build",
        PM2_SERVE_SPA: "true",
      },
      env_production: {
        NODE_ENV: "production",
        PM2_SERVE_PATH: "./build",
        PM2_SERVE_SPA: "true",
      },
    },
  ],
};
