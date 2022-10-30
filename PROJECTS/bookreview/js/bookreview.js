// Import the bookVault array from books.js
import { bookVault } from "./books.js";



// See data

console.log(`You currently have ${bookVault.length} book(s) in your vault.`);

for (let i=0; i < bookVault.length; i++) {
    console.log(`Book number ${i+1}`)
    for (let key in bookVault[i]) {
        console.log(`\t${key}: ${bookVault[i][key]}`);
    }
    console.log("\n")
}