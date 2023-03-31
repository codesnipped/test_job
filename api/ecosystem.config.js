module.exports = {
    apps: [
        {
            name: "test_api",
            script: "./app.js",
            watch: true,
            development: {
                "PORT": 15000,
                "NODE_ENV": "development"
            },
            test: {
                "PORT": 15000,
                "NODE_ENV": "test"
            },
        }
    ]
}