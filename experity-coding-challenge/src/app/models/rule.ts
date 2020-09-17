export interface IRule {
    mutipleOfValue: number
    outputValue: string
}

export class Rule implements IRule {
    mutipleOfValue: number
    outputValue: string

    constructor(_multipleOfValue: number, _outputValue: string) {
        this.mutipleOfValue = _multipleOfValue;
        this.outputValue = _outputValue;
    }

    // Rule Function
    isMultiple(number: number): boolean {
        if ((number % this.mutipleOfValue) === 0) {
            return true;
        }
        else{
            return false;
        }
    }

}
