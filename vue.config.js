/*
 * @Author: your name
 * @Date: 2021-03-16 15:53:15
 * @LastEditTime: 2021-03-17 02:05:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/vue.config.js
 */
// 引入
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// // 展示图形化信息
// (config) => {
//   config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);

//   const miniCssExtractPlugin = new MiniCssExtractPlugin({
//     filename: 'assets/[name].[hash:8].css',
//     chunkFilename: 'assets/[name].[hash:8].css',
//   });
//   config.plugin('extract-css').use(miniCssExtractPlugin);
// };
module.exports = {
  // 相对路径打包可以部署在任意路径下
  publicPath: './',
  // 把资源都打包到./static中
  assetsDir: './static',
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },
  // css: {
  //   // css预设器配置项
  //   loaderOptions: {
  //     // pass options to sass-loader
  //     sass: {
  //       // 引入全局变量样式,@使我们设置的别名,执行src目录
  //       data: '@import "@/assets/_var.scss";',
  //     },
  //   },
  // },
};
