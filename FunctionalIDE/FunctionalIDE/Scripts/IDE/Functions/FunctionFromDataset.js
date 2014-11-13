/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Functions) {
        var FunctionFromDataset = (function () {
            function FunctionFromDataset() {
                this.TypeName = "IDE.Functions.FunctionFromDataset";
                this.DatasetContract = ko.observable();
                this.FunctionName = ko.observable("");
                this.FunctionParams = ko.observableArray();
                this.UserSteps = ko.observableArray();
                this.ReferenceDialog = IDE.Dialogs.DialogService.Dialog;
                this.CurrStepIdx = 0;
            }
            FunctionFromDataset.prototype.AddStep = function (step_type) {
                var new_step = IDE.Factory.Factories[step_type]();
                this.UserSteps.splice(this.CurrStepIdx, 0, new_step);
                this.CurrStepIdx++;
            };
            FunctionFromDataset.prototype.RemoveStep = function (del_step) {
                this.UserSteps.remove(del_step);
            };

            FunctionFromDataset.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };

            //We will opass this function to the child steps so that they can call it to request the names of fields of steps before them
            FunctionFromDataset.prototype.GetDatasetFieldNames = function (calling_step, dataset_name) {
                //find the calling step
                var field_contracts = this.DatasetContract().FieldsRequired();
                return field_contracts;
            };

            FunctionFromDataset.prototype.GetSingleValueNames = function (calling_step) {
                var steps = this.UserSteps();
                var field_names = [];

                for (var step_idx = 0; step_idx < steps.length; step_idx++) {
                    if (steps[step_idx] == calling_step) {
                        break;
                    }
                    if (steps[step_idx] instanceof IDE.Steps.SingleValueStep) {
                        field_names.push(steps[step_idx].StepName());
                    }
                }
                return field_names;
            };

            //Called by the UI when the user is trying to select a single value reference.
            FunctionFromDataset.prototype.ShowAvailableSingleValueStepNames = function (calling_step, calling_reference) {
                var db_fields = this.DatasetContract().FieldsRequired();
                var var_fields = this.GetSingleValueNames(calling_step);
                var all_fields = db_fields.concat(var_fields);
                calling_reference.IsSelected(true);
                this.ReferenceDialog.Display(function (keyword) {
                    if (keyword == "") {
                        return all_fields;
                    } else {
                        return all_fields.filter(function (element) {
                            return element.indexOf(keyword) >= 0;
                        });
                    }
                }, function (keyword) {
                    return "";
                }, function (chosen_item) {
                    calling_reference.SetReference(chosen_item);
                    calling_reference.IsSelected(false);
                }, function () {
                    calling_step.RemoveReference(calling_reference);
                });
            };
            return FunctionFromDataset;
        })();
        Functions.FunctionFromDataset = FunctionFromDataset;
    })(IDE.Functions || (IDE.Functions = {}));
    var Functions = IDE.Functions;
})(IDE || (IDE = {}));
//# sourceMappingURL=FunctionFromDataset.js.map
