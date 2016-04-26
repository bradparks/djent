var autoprefixer = require('autoprefixer-core');
var cwd = process.cwd();

module.exports = {
    postcss: [ autoprefixer({ browsers: ['last 10 versions'] }) ],
    resolve: {
        root: [
            cwd + '/src/samsung/',
            cwd + '/src/samsung/js/',
            cwd + '/src/samsung/styles/',
            cwd + '/src/samsung/static/'
        ],
        fallback: [
            cwd + '/src/generic/',
            cwd + '/src/generic/js/',
            cwd + '/src/generic/styles/',
            cwd + '/src/generic/static/'
        ]
    }
}
