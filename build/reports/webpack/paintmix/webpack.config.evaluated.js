{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/chander/IdeaProjects/paintmix/build/js/packages/paintmix/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/chander/IdeaProjects/paintmix/build/js/packages/paintmix/kotlin-dce-dev/paintmix.js'
    ]
  },
  output: {
    path: '/Users/chander/IdeaProjects/paintmix/build/distributions',
    filename: [Function: filename],
    library: 'paintmix',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/Users/chander/IdeaProjects/paintmix/build/processedResources/js/main'
    ]
  }
}