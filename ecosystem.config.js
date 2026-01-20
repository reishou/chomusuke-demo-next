module.exports = {
  apps: [
    {
      name: 'chomusuke-demo-next',
      script: 'pnpm',
      args: 'start -p 3001',
      cwd: '/var/www/chomusuke-demo-next',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
        ABC: process.env.POSTGRES_URL,
        DEF: "90000"
      },
      env_file: '.env.production',
    },
  ],
};