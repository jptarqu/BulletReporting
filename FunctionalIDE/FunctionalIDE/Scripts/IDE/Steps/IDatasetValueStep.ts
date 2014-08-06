/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    //Steps that receive values resulting from single value operations (no dataset operations)
    export interface IDatasetValueStep extends IStep {
        
        FieldNames: KnockoutObservableArray<string>;
    }
}  