const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
