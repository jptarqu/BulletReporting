/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Functions {
    //A function definition. Functions are not supposed to modify state
    export interface IFunction {
        TypeName: string;
        FunctionName: KnockoutObservable<string>;
        LoadDataFromJSON(source): void;
    }
}  