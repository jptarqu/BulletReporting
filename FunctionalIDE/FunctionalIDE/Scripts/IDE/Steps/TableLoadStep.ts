/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    export class TableLoadStep extends DatasetValueStep {
        TypeName: string = "IDE.Steps.TableLoadStep";
        Name = ko.observable<string>("");

        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}