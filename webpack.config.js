const path = require('path');
module.exports = {
    mode: 'development',
    entry: './applicationJS/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'assets')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'raw-loader',
                        options: {}
                    }
                ]
            }
        ]
    }
};