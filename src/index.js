import { run } from './app/app.js'
import { ScriptClass2 } from './app/script2.js'
import './main.css'
const scriptObj2 = new ScriptClass2();

console.log('from index.js');
run(scriptObj2);