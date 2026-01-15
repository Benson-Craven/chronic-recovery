module.exports = {
    apps: [
        {
            name: "chronic-recovery",
            script: "node_modules/next/dist/bin/next",
            args: "start",
            cwd: "/opt/chronic-recovery",
            env: {
                NODE_ENV: "production",
                PORT: 3000,
            },
        },
    ],
}
