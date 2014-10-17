/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    export class TableLoadStep extends DatasetValueStep {
        TypeName: string = "IDE.Steps.TableLoadStep";
        Name = ko.observable<string>("");
        TableName = ko.observable<string>("");
        IsSelected = ko.observable<boolean>();

        //Called by the parent function with info from a dialog
        SetReference(reference_name: string, field_names: string[]): void {
            this.TableName(reference_name);
            this.FieldNames(field_names);
        }

        RemoveReference(reference_name: string): void {
            if (reference_name == this.Name()) {
                this.TableName("");
                this.FieldNames.removeAll();
            }
        }

        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}