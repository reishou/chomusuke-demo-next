module.exports = {
  apps: [
    {
      name: 'chomusuke-demo-next',
      script: 'npm',
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