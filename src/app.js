const net = require('net')
const logger = require('./utils/logger')
const dataController = require('./Controller/dataController')
const mongoose = require('mongoose')
const server = net.createServer()

const port = process.env.PORT || 9000

require('dotenv').config()

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
        if(data)
        {
            dataController.validateVerification(data)
        }

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


mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {
    console.log("Database Connected")
})
.catch((error) => {
    console.log(`Error Database ${error}`)
})

server.listen(port, () => {
    console.log("Server Initialized")
})