/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    export class TextStep implements IStep, ISingleValueStep {
        TypeName: string = "IDE.Steps.TextStep";
        StepName = ko.observable<string>("");
        Value = ko.observable<String>();


        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
	
}  