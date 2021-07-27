import { scriptFunc1 } from './script1';
import { ScriptClass2 } from './script2';
const scriptObj2 = new ScriptClass2();


// Instantiate main function which contains all runnable code
export const run = (scriptObj2) => {
    scriptFunc1();
    scriptObj2.scriptMethod2();

    // Where your code goes 
}

