const { execute } = require("../execute");

async function checkCapacity() {
    try {
        const capacityLine = await execute("du -sh");
        let lsResultLine = lsResult.split(" ");

        let capacity = lsResultLine[0]
        return capacity
    } catch (error) {
        console.log("error : " + error);
    }
}

module.exports.checkCapacity = checkCapacity