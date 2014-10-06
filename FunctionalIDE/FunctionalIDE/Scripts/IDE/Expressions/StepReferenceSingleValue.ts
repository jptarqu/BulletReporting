/// <reference path="../../typings/knockout/knockout.d.ts" />


module IDE.Expressions {
    export class StepReferenceSingleValue {
        TypeName = "IDE.Expressions.StepReferenceSingleValue";
        StepName = ko.observable<string>();
        IsSelected = ko.observable<boolean>();

        constructor(reference_name: string) {
            this.StepName(reference_name);
        }

        SetReference(reference_name: string): void {
            this.StepName(reference_name);
        }

        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}   