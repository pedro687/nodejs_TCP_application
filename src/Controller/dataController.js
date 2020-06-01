const logger = require('../utils/logger');

module.exports = {
    async validateVerification(data) {
        const validation = data.split(3);
        if(validation[0] == "$AH") { 
            console.log("requisition accepted")
            await getImei.getImei(data)
        }
        else {
            console.log("Invalid requisition")
        }
    }
}

const getImei = {
    async getImei(data) {
        const imeiParse = data.split(/\D+/)
        if(imeiParse[1].length == 15 ) {
            console.log("Valid IMEI");
            await getCommandWord.getCommandWord(data)
        }
        else {
            console.log("Invalid IMEI");
        }
        console.log(imeiParse)
    }
}

const getCommandWord = {
    async getCommandWord(data) {
        console.log("Iniciando")
    }
}
//    $AH353456789012345U001{asdasdsa}55
