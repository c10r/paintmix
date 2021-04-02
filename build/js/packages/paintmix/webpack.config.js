let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/chander/IdeaProjects/paintmix/build/js/packages/paintmix/kotlin-dce-dev/paintmix.js"]
};

config.output = {
    path: "/Users/chander/IdeaProjects/paintmix/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "paintmix.js"
            : "paintmix-[name].js";
    },
    library: "paintmix",
    libraryTarget: "umd",
};

// resolve modules
config.resolve.modules.unshift("/Users/chander/IdeaProjects/paintmix/build/js/packages/paintmix/kotlin-dce-dev")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';
config.stats = config.stats || {}
Object.assign(config.stats, config.stats, {
    warningsFilter: [/Failed to parse source map/]
})

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "contentBase": [
    "/Users/chander/IdeaProjects/paintmix/build/processedResources/js/main"
  ]
};

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin(tcErrorPlugin))
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/Users/chander/IdeaProjects/paintmix/build/reports/webpack/paintmix/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
