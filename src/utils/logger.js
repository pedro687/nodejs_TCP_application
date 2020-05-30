const { createLogger, format, transports } = require('winston')

module.exports = createLogger({
    transports: [
        new transports.File({
            maxFiles: 5,
            maxsize: 5120000,
            filename: `${__dirname}/../logs/logs.api.log`
        }),

        new transports.Console({
            level: 'debug'
        })
    ]
})