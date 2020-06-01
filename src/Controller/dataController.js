const logger = require('../utils/logger');

module.exports = {
    async validateVerification(data) {
        const validation = data.split(3);
        if(validation[0] == "$AH") { 
            console.log("Accept Requisition")
        }
        else {
            console.log("Invalid requisition")
        }
    }
}