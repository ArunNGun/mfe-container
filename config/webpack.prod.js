const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const domain = process.env.PRODUCTION_DOMAIN
const devConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                authModal: `authModal@${domain}/authModal/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig)