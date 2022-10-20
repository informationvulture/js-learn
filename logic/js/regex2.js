const fs = require("fs");

for (const line of fs.readFileSync("words.txt", "utf-8").split("\n")) {
    if (/^dog[s-z]/i.test(line)) {
        console.log(line);
    }
}
