/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Functions {
    export class FunctionFromDataset implements IFunction, IScope  {
        TypeName = "IDE.Functions.FilterFunction";
        DatasetContract = ko.observable<IDE.Contracts.DatasetContract>();
        FunctionName = ko.observable<string>("");
        FunctionParams = ko.observableArray<IDE.Params.Param>();
        UserSteps = ko.observableArray<IDE.Steps.ISingleValueStep>(); //UserVarSteps can only be static values or operators or function calls

        AddStep(new_step: IDE.Steps.ISingleValueStep): void {
            this.UserSteps.push(new_step);
        }
        RemoveStep(del_step: IDE.Steps.ISingleValueStep): void {
            this.UserSteps.remove(del_step);
        }

        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }

        //We will opass this function to the child steps so that they can call it to request the names of fields of steps before them
        GetDatasetFieldNames(calling_step: IDE.Steps.IStep, dataset_name: string): Array<string> {
            //find the calling step
            var field_contracts = this.DatasetContract().FieldsRequired();
                return field_contracts;
        }
    }
}  