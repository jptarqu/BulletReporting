/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    export class FieldStep implements IStep, ISingleValueStep {
        TypeName: string = "IDE.Steps.FieldStep";
        StepName = ko.observable<string>("");
        FieldName = ko.observable<String>();


        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}  