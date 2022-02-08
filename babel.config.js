module.exports = {
    ignore: ['node_modules/**/*'],
    presets: [
        ['@babel/preset-typescript'],
        [
            "@babel/preset-env",
            {
                targets: {
                    esmodules: true,
                },
            },
        ],
        "@babel/preset-react",
    ],
};