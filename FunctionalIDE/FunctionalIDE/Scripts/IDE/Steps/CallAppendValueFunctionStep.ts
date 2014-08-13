/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    export class CallAppendValueFunctionStep extends DatasetValueStep {
        TypeName: string = "IDE.Steps.CallAppendValueFunctionStep";

        FunctionName = ko.observable<string>();
        DatasetName = ko.observable<string>(); 
        ParamNames = ko.observableArray<string>();
        //FieldNames = ko.observableArray<string>(); //for filter functions the FieldNames would be the same as the names of the passed dataset

        AddParam(param: string): void {
            this.ParamNames.push(param);
        }
        RemoveParam(param: string): void {
            this.ParamNames.remove(param);
        }

        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}  