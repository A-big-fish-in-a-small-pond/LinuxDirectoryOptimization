const { execute } = require("../execute");

async function checkFile() {
    try {
        const lsResult = await executecute("ls -arlt");//ls -arlt
        let lsResultLine = lsResult.split("\n");
        let resultFile = [];

        for (let i = 0; i < lsResultLine.length; i++) {
            if (lsResultLine[i][0] == "-") {
                let enterSplit = lsResultLine[i].split(" ");
                if (enterSplit[9] == "." || enterSplit[9] == "..") continue;
                resultFile.push({ name: enterSplit[9], capacity: enterSplit[4] });
            }
        }
        return resultFile
    } catch (error) {
        console.log("error : " + error);
    }
}

module.exports.checkFile = checkFile