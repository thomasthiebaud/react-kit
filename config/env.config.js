module.exports = {
  development: config => ({
    compiler_public_path: `http://${config.server_host}:${config.server_port}/`,
  }),
  production: () => ({
    compiler_public_path: '/',
    compiler_devtool: false,
    compiler_hash_type: 'chunkhash',
    compiler_stats: {
      chunks: true,
      chunkModules: true,
      colors: true,
    },
  }),
}
