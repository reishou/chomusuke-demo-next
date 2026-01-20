module.exports = {
  apps: [
    {
      name: 'chomusuke-demo-next',
      script: 'pnpm',
      args: 'start',
      cwd: '/var/www/chomusuke-demo-next',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        POSTGRES_URL: process.env.POSTGRES_URL,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        BASE_URL: process.env.BASE_URL,
        AUTH_SECRET: process.env.AUTH_SECRET,
      },
      envFiles: '.env'
    },
  ],
};