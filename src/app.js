const net = require('net');

const server = net.createServer();

server.on("connection", (socket) => {
    const {
        remotePort,
        remoteAddress,
        remoteFamily
    } = socket;

    socket.on("data", (data) => {
        console.log(`Server received: ${data} from: ${remoteAddress}`)

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
            remoteFamily,
        })
    })
})

server.listen(9000, () => {
    console.log("Server Initialized")
})