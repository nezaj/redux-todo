const path = require('path')

const PATHS = {
  build: path.join(__dirname, 'build'),
  src: path.join(__dirname, 'src')
}

module.exports = {
  devtool: 'eval',  // Helpful for debugging
  entry: path.join(PATHS.src, 'index.js'),
  output: {
    path: PATHS.build,
    filename: "bundle.js"
  },
  resolve: {
    // Automagically figure out the extension in import statements
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        // Lets me use ES6+ in my code!
        test: /\.jsx?$/,
        include: [PATHS.src],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
    ]
  },
};
