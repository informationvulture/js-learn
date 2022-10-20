## readline.js

### What's it doing?
Designed to read line by line from a given text file, and return the total times a word was found fitting the regex.

### Problems
Getting the code to work with a specific number of entries and then stop was a challnge.

*How I solved it*:
    
- I used ES6 imports to get `fs` and `readline`. 
- I created a `readline` interface, and used `rl.on` to start reading line by line.
- Once the code reaches the condition to stop, I call `rl.close()`.
- At the end of the function, I call 
    ```js
    .on("close", () => {...});
    ```
    Inside here, I run whatever code I need, ensuring I end with:
    ```js
    process.exit(0);
    ```

This code apperently also works if you do:
```js
rl.on("close", () => {...});
```



