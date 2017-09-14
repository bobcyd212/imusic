module.exports = {
    entry: './src/index.js',//唯一入口文件 
    output: {
        filename: "./dist/bundle.js"//打包后输出文件的文件名  
    },
    module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', 'autoprefixer-loader']
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader','autoprefixer-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
        }
      },
    ]
  }
}