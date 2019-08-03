const routes = require('next-routes');

module.exports = routes().add('posts/detail', '/posts/:id');
