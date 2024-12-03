const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    popup: './src/pages/popup/index.ts',
    settings: './src/pages/settings/index.ts',
    history: './src/pages/history/index.ts',
    'shoelace-init': './src/utils/shoelace.ts',
    background: './src/scripts/background.ts',
    'content-script': './src/scripts/content.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@types': path.resolve(__dirname, 'src/types'),
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/pages/popup/index.html',
          to: 'popup.html'
        },
        {
          from: 'src/pages/settings/index.html',
          to: 'settings.html'
        },
        {
          from: 'src/pages/history/index.html',
          to: 'history.html'
        },
        {
          from: 'src/assets/styles/main.css',
          to: 'styles.css'
        },
        {
          from: 'manifest.json',
          to: 'manifest.json'
        },
        {
          from: 'src/assets/icons',
          to: 'icons'
        },
        {
          from: 'node_modules/@shoelace-style/shoelace/dist/themes/light.css',
          to: 'shoelace/themes/light.css'
        },
        {
          from: 'node_modules/@shoelace-style/shoelace/dist/assets',
          to: 'shoelace/assets'
        }
      ],
    }),
  ],
}; 