const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const production = process.env.NODE_ENV;

module.exports = {
    mode: production,
    devtool: 'source-map',
    
    output: {
        filename: 'style.bundle.js',
        chunkFilename: 'style.hash.chunk.js',
        path: path.resolve(__dirname, 'assets/css'),
        publicPath: '/assets/css'
    },

    resolve: {
        extensions: ['.css', '.scss'],
        alias: {
            '~': path.resolve(process.cwd(), 'src'),
        },
    },

    entry: {
        'styles': './scss/main.module.scss',
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, importLoaders: 1} },
                    { loader: 'postcss-loader', options: {
                        postcssOptions: {
                            plugins: [autoprefixer(), cssnano()]
                        }
                    }},
                    { loader: 'sass-loader' },
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.min.css',
            chunkFilename: 'main.chunk.css',
        })
    ],

    stats: {
        children: true,
    }
}