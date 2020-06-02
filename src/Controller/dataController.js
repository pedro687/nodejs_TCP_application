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
        dataArray = [];
        textSize = data.length - 2;
        var slices = [[0,3], [3,18], [18,22], [22, textSize], [textSize, textSize+2]]
        
        for(slice in slices)
        {
            dataArray.push(data.substring(slices[slice][0], slices[slice][1]))
        }
        
        if(dataArray[1].length == 15)
        {
            console.log("ValidImei")
            await getCommandWord.getCommandWord(dataArray)
        }
        else
        {
            console.log("Invalid IMEI")
        }
    }
}

const getCommandWord = {
    async getCommandWord(dataArray) {
       if(dataArray[2] != "U001") {
           console.log("Invalid Command Word")
       }
       else {
           console.log("Valid Command Word")
           await getBodyData.getBodyData(dataArray)
       }
    }
}

const getBodyData = {
    async getBodyData(dataArray) {
        console.log("Amém")
    }
}

//    $AH353456789012345U001{asdasdsa}55
