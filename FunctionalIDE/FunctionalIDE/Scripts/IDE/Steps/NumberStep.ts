/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    export class NumberStep extends SingleValueStep implements ISingleValueStep{
        TypeName: string = "IDE.Steps.NumberStep";
        //StepName = ko.observable<string>("");
        Value = ko.observable<Number>(0);


        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}  