// Instantiate imported objects
const scriptObj1 = new script1();
const scriptObj2 = new script2();
// Instantiate main function which contains all runnable code
const run = (scriptObj1, scriptObj2) => {
    scriptObj1.scriptFunc1();
    scriptObj2.scriptMethod2();

    // Where your code goes 
}

// Call main function
run(scriptObj1, scriptObj2);