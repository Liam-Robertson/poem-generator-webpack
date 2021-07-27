// Instantiate imported objects
const scriptObj1 = new script1();
const scriptObj2 = new script2();
// Instantiate main function which contains all runnable code
const run = (scriptObj1, scriptObj2) => {
    console.log('hello');

    // Where your code goes 
    // script1Obj.method();
}

// Call main function
run(scriptObj1, scriptObj2);