module.exports = {
  apps: [
    {
      name: 'texas-holdem-bot',
      script: 'build/index.js',

      autorestart: true,
      max_memory_restart: '2G',

      merge_logs: true,
      combine_logs: true,
      kill_timeout: 5000,

      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
