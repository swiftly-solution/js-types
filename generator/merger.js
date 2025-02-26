const { readdirSync, readFileSync, appendFileSync, statSync } = require("fs")

function GetFiles(dir, files_) {
    files_ = files_ || [];
    var files = readdirSync(dir);
    for (var i in files) {
        var name = dir + '/' + files[i];
        if (statSync(name).isDirectory()) {
            GetFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

for (const file of GetFiles("../types")) {
    const content = readFileSync(file).toString();
    appendFileSync("../index.d.ts", content + "\n");
}