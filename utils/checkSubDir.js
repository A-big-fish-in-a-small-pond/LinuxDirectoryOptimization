const { execute } = require("../execute");

async function checkSubDir() {
    try {
        const lsResult = await execute("ls -arlt");//ls -arlt
        let lsResultLine = lsResult.split("\n");
        let resultDirectory = [];

        for (let i = 0; i < lsResultLine.length; i++) {
            if (lsResultLine[i][0] == "d") {
                let enterSplit = lsResultLine[i].split(" ");
                if (enterSplit[9] == "." || enterSplit[9] == "..") continue;
                resultDirectory.push({ name: enterSplit[9], capacity: enterSplit[4] });
            }
        }
        return resultDirectory
    } catch (error) {
        console.log("error : " + error);
    }
}

module.exports.checkSubDir = checkSubDir