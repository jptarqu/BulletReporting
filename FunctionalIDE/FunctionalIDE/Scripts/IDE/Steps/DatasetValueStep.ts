/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    export class DatasetValueStep implements IDatasetValueStep {
        TypeName: string;
        //FieldNames: KnockoutObservableArray<string>;
        StepName = ko.observable<string>("");
        FieldNames = ko.observableArray<string>();//these names need to be populated from the table provider service
    }
} 