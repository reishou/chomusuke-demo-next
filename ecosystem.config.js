module.exports = {
  apps: [
    {
      name: 'chomusuke-demo-next',
      script: 'pnpm',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        PORT: 3001,
      },
    },
  ],
};