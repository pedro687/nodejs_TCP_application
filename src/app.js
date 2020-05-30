const net = require('net');
const logger = require('./utils/logger')
const server = net.createServer()

server.on("connection", (socket) => {
    socket.setEncoding('utf-8')
    const {
        remotePort,
        remoteAddress,
        remoteFamily
    } = socket;

    socket.on("data", (data) => {
        console.log(`Server received: ${data} from: ${remoteAddress}`)
        logger.info(data)

    })

    server.on("error", (error) => {
        console.log(`Error from ${remoteAddress} because: ${error.message}`)
    })

    socket.once("close", () => {
        const {
            bytesRead,
            bytesWritten
        } = socket

        console.log("Server Closed", {
            remoteAddress,
            bytesRead,
            bytesWritten,
            remotePort,
            remoteFamily
        })
    })
})

server.listen(9000, () => {
    console.log("Server Initialized")
})