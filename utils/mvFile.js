const { execute } = require("../execute");

async function mvFile(fileArr) {
    try {
        let pwd = await execute("pwd")//현재 디렉토리 이름 확인
        let pwdSplit = pwd.split("/")
        let nowDirName = pwdSplit[-1]

        const filenameline = await execute("date");//filename 생성
        let filenamesplit = filenameline.split(" ");
        let filenameresult = ""
        for (let i = 0 ; i < filenamesplit.length ; i++){
            filenameresult = filenameresult + filenamesplit[i]
        }
        
        const mkdir = await execute("mkdir ./../" + filenameresult);//옮길 디렉토리 생성
        const mvfile = await execute("mv * ./../" + filenameresult)



        //현재 디렉토리 삭제 후 

        return resultDirectory
    } catch (error) {
        console.log("error : " + error);
    }
}

module.exports.mvFile = mvFile