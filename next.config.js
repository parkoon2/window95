const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const OptimizerCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = withCSS(
    withSass({
        webpack(config, { dev }) {
            if (config.mode === 'production') {
                if (Array.isArray(config.optimization.minimizer)) {
                    config.optimization.minimizer.push(
                        new OptimizerCSSAssetsPlugin({})
                    )
                }
            }
            config.module.rules.push({
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]'
                    }
                }
            })

            return config
        }
    })
)
