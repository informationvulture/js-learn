## readline.js

### What's it doing?
Designed to read line by line from a given text file, and return the total times a word was found fitting the regex.

### Problems
Getting the code to work with a specific number of entries and then stop was a challenge.

*How I solved it*:
    
- I used ES6 imports to get `fs` and `readline`. 
- I created a `readline` interface, and used `rl.on` to start reading line by line.
- Once the code reaches the condition to stop, I call `rl.close()`.
- At the end of the function, I call 
    ```js
    .on("close", () => {...});
    ```
    **This is they key step that I was missing!**
    The code would not stop running even when it finished running the code
    in `rl.close()`.
    Inside here, I run whatever code I need, ensuring I end with:
    ```js
    process.exit(0);
    ```

    This code apparently also works if you do:
    ```js
    rl.on("close", () => {...});
    ```

*Questions*:
What is the difference between using:

```js
process.exit(0)
```

and


```js
rl.removeAllListeners;
rl.removeListener("line", () => {});
```

Currently, it looks like no code will run after `process.exit(0)`. However, it looks like using `removeAllListeners` or `removeListener` stops the stream and allows code to still be executed.

Update: After testing it again, it looks like it properly closes without anything other than the `rl.close` stuff. Further learning needed.