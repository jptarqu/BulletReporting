/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    export class TableLoadStep implements IDatasetValueStep {
        TypeName: string = "IDE.Steps.TableLoadStep";
        StepName = ko.observable<string>("");
        Name = ko.observable<string>("");
        FieldNames = ko.observableArray<string>();//these names need to be populated from the table provider service

        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}