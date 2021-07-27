import { scriptFunc1 } from './script1';
import { camelCase } from 'lodash';


export class ScriptClass2 {
    constructor() {
        this.loadMessage = 'from script 2 - uses lodash';
    }
    scriptMethod2() {
        scriptFunc1();
        console.log(camelCase(this.loadMessage));
    }
}