module.exports = {
  apps: [
    {
      name: "angular",
      script: "serve",
      env: {
        NODE_ENV: "development",
        PM2_SERVE_PATH: "./dist/pm2nodetdp-angular",
        PM2_SERVE_SPA: "true",
      },
      env_production: {
        NODE_ENV: "production",
        PM2_SERVE_PATH: "./dist/pm2nodetdp-angular",
        PM2_SERVE_SPA: "true",
      },
    },
  ],
};
