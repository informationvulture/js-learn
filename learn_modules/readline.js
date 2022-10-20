import * as fs from "node:fs";
import * as readline from "node:readline";


const rl = readline.createInterface({
    input: fs.createReadStream("words.txt"),
    crlfDelay: Infinity,
});

const totals = [];
rl.on("line", (line) => {
    if (/^dog./.test(line)) {
        totals.push(line);
    }
    if (totals.length == 5) {
        // Send the signal to end. Code won't run
        // after this line.
        rl.close();
    }
}).on("close", () => {
    console.log(`Found ${totals.length} words`);

    console.log(`File processed: ${totals} matches found.`);

    process.exit(0);
});
