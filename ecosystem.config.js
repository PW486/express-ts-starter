module.exports = {
  apps: [{
    name: "express-ts",
    script: "./dist/server.js",
    node_args: "-r ./tsconfig-paths-bootstrap.js",
    instances: "max",
    exec_mode: "cluster",
    env: { "NODE_ENV": "production" },
  }]
}
