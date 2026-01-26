const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { env } = require('process');

module.exports = (env, argv) =>{
    const isProduction = argv.mode === 'production';
    
    // Определяем env файл на основе переданной переменной или mode
    const envFile = env && env.ENV_FILE ? `.env.${env.ENV_FILE}` : 
                    isProduction ? '.env.production' : '.env.local';

    console.log('Loading environment from:', envFile); // Для отладки
    return {
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
            // '@assets-svg': path.resolve(__dirname, 'src/assets/index'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils/*': path.resolve(__dirname, 'src/utils'),
            "@shared-types": path.resolve(__dirname,'src/shared/types/index'),
            '@ui': path.resolve(__dirname, 'src/shared/ui'),
            '@context/*': path.resolve(__dirname, 'src/context'),
            '@helpers': path.resolve(__dirname, 'src//shared/helpers/index'),
            '@API': path.resolve(__dirname, 'src/API/index'),
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
        
        // Загружаем .env.local для разработки
        new Dotenv({
            path: isProduction ? '.env.production' : '.env.local',
            systemvars: true, // Также загружать системные переменные
            safe: true, // Не падать, если файл .env не найден
            defaults: true // Использовать .env.example как шаблон (опционально)
        }),
        
        // Или альтернативно - загружать разные файлы в зависимости от mode
        new Dotenv({
            path: `./.env.${argv.mode || 'development'}`,
            defaults: true // fallback к .env
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            publicPath: '/', // ✅ Добавьте и здесь
        },
        port: 5173,
        open: true,
        hot: true,
        historyApiFallback: {
            historyApiFallback: true, // ✅ Для SPA роутинга
        },
    },
};
};
