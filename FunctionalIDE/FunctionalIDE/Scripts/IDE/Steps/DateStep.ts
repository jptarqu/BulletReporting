/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    
    export class DateStep implements IStep, ISingleValueStep {
        TypeName: string = "IDE.Steps.DateStep";
        StepTypeName = "DateStep";
        StepName = ko.observable<string>("");
        Year = ko.observable<Number>();
        Month = ko.observable<Number>();
        Day = ko.observable<Number>();


        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}  