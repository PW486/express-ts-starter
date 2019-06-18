module.exports = {
  apps: [
    {
      name: 'express-ts',
      script: './dist/server.js',
      node_args: '-r ./tsconfig-paths-bootstrap.js',
      instances: 2,
      exec_mode: 'cluster',
      merge_logs: true,
      env: { NODE_ENV: 'production' },
    },
  ],
};
