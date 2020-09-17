import { Rule } from './rule';

export interface IEventType  {
    displayValue: string
    value: string,
    startingValue: number,
    endingValue: number,
    rules: Array<Rule>
}

export class EventType implements IEventType {
    displayValue: string
    value: string
    startingValue: number
    endingValue: number
    rules: Array<Rule>
    output:Array<string>


    constructor(_displayValue: string, _startingValue:number, _endingValue:number, _rules:Array<Rule>) {
        this.displayValue = _displayValue;
        this.value = _displayValue.toLowerCase();
        this.startingValue = _startingValue;
        this.endingValue = _endingValue;
        this.rules = _rules
        this.output = this.generateOutput(this.startingValue, this.endingValue)
    }

    // generate Array based on Rules
    generateOutput(startingValue, endingValue): Array<string> {
        let array = [];
        for (var i = startingValue; i <= endingValue; i++) {
            if(this.rules[0].isMultiple(i)){
                if(this.rules[1].isMultiple(i)){
                    array.push(this.rules[0].outputValue + ' ' + this.rules[1].outputValue)
                }
                else{
                    array.push(this.rules[0].outputValue)
                }
            }
            else if(this.rules[1].isMultiple(i)){
                array.push(this.rules[1].outputValue)
            }
            else{
                array.push(i.toString())
            }
        }
        return array
    }
}

