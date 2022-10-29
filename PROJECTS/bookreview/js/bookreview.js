// Import the bookVault array from books.js
import { bookVault } from "./books.js";



// See data

for (let i = 0; i < bookVault.length; i++) {
    for (let book in bookVault[i]) {
        console.log(`${book}=${bookVault[i][book]}`);
    }
}