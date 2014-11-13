/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Functions {
    export class FunctionFromDataset implements IFunction, IScope  {
        TypeName = "IDE.Functions.FunctionFromDataset";
        DatasetContract = ko.observable<IDE.Contracts.DatasetContract>();
        FunctionName = ko.observable<string>("");
        FunctionParams = ko.observableArray<IDE.Params.Param>();
        UserSteps = ko.observableArray<IDE.Steps.ISingleValueStep>(); //UserVarSteps can only be static values or operators or function calls

        ReferenceDialog = IDE.Dialogs.DialogService.Dialog;
        CurrStepIdx = 0; 

        AddStep(step_type: string) {
            var new_step = Factory.Factories[step_type]();
            this.UserSteps.splice(this.CurrStepIdx, 0, new_step);
            this.CurrStepIdx++;
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

        GetSingleValueNames(calling_step: IDE.Steps.IStep): Array<string> {

            var steps = this.UserSteps();
            var field_names: Array<string> = [];

            for (var step_idx = 0; step_idx < steps.length; step_idx++) {
                if (steps[step_idx] == calling_step) {
                    //reached the calling step, shoud not go futher into future steps
                    break;
                }
                if (steps[step_idx] instanceof Steps.SingleValueStep) {
                    field_names.push((<Steps.SingleValueStep> steps[step_idx]).StepName());
                }
            }
            return field_names;
        }

        //Called by the UI when the user is trying to select a single value reference.
        ShowAvailableSingleValueStepNames(calling_step: IDE.Steps.IDependsOnSingleValueSteps,
            calling_reference: IDE.Expressions.StepReferenceSingleValue): void {

            var db_fields = this.DatasetContract().FieldsRequired();
            var var_fields = this.GetSingleValueNames(calling_step);
            var all_fields = db_fields.concat(var_fields);
            calling_reference.IsSelected(true);
            this.ReferenceDialog.Display(
                (keyword: string) => {
                    if (keyword == "") {
                        return all_fields;
                    }
                    else {
                        return all_fields.filter(
                            (element: string) => element.indexOf(keyword) >= 0
                            )

                    }
                }
                ,
                (keyword: string) => ""
                , (chosen_item: string) => {
                    calling_reference.SetReference(chosen_item);
                    calling_reference.IsSelected(false);
                }
                , () => {
                    calling_step.RemoveReference(calling_reference);
                }
                );
        }
    }
}  