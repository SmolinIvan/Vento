const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.module\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true },
                    },
                ],
            },
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils/*': path.resolve(__dirname, 'src/utils'),
            // '@types': path.resolve(__dirname, 'src/shared/types'), // ← для .d.ts файлов
            "@shared-types": path.resolve(__dirname,'src/shared/types/index'),
            // '@shared/types': path.resolve(__dirname, 'src/shared/types'),
            '@ui': path.resolve(__dirname, 'src/shared/ui'),
            '@context/*': path.resolve(__dirname, 'src/context'),
            '@helpers': path.resolve(__dirname, 'src//shared/helpers/index'),
            // другие алиасы...
        },
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/Vento/', // ✅ Важно: должен начинаться и заканчиваться с /
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: '404.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            publicPath: '/', // ✅ Добавьте и здесь
        },
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: {
            historyApiFallback: true, // ✅ Для SPA роутинга
        },
    },
};
 