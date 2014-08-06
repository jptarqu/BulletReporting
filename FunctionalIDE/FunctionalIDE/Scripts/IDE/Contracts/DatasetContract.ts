/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Contracts {
    export class DatasetContract implements IContract {
        FieldsRequired = ko.observableArray<string>();

        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
} 