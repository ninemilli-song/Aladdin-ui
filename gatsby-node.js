const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'aladdin-ui/lib': path.resolve(__dirname, '../components/'),
        'aladdin-ui/esm': path.resolve(__dirname, '../components/'),
        'aladdin-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};