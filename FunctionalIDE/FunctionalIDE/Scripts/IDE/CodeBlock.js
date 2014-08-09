/// <reference path="../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    var CodeBlock = (function () {
        function CodeBlock() {
            this.ChildFunctions = ko.observableArray();
            this.UserSteps = ko.observableArray();
        }
        CodeBlock.prototype.Test = function () {
            var testdata = {
                "ChildFunctions": [
                    {
                        "TypeName": "IDE.Functions.FilterFunction", "DatasetContract": {
                            "FieldsRequired": [
                                "Account Number", "Tran Amount"
                            ]
                        }, "FunctionName": "GetAboveOffset", "FunctionParams": [
                            { "TypeName": "IDE.Params.DataSetParam", "ParamName": "Offset" }
                        ], "UserSteps": [
                            {
                                "TypeName": "IDE.Steps.OperatorStep", "StepTypeName": "OperatorStep", "StepName": "", "Operator": ">", "OperandVarNames": [
                                    "Dataset.Tran Amount", "Offset"
                                ]
                            }
                        ]
                    }
                ], "UserSteps": [
                    {
                        "TypeName": "IDE.Steps.TableLoadStep", "StepName": "Step 1", "Name": "Transactions", "FieldNames": [
                            "Account Number", "Tran Amount"
                        ]
                    },
                    {
                        "TypeName": "IDE.Steps.TableLoadStep", "StepName": "Step 2", "Name": "Accts", "FieldNames": []
                    },
                    { "StepTypeName": "NumberStep", "StepName": "tax", "Value": 5 },
                    { "StepTypeName": "NumberStep", "StepName": "penalty", "Value": 6 },
                    {
                        "TypeName": "IDE.Steps.OperatorStep", "StepTypeName": "OperatorStep", "StepName": "MyOffset", "Operator": "+", "OperandVarNames": [
                            "tax", "penalty"
                        ]
                    },
                    {
                        "TypeName": "IDE.Steps.CallFilterFunctionStep", "StepName": "", "FunctionName": "GetAboveOffset", "DatasetName": "Step 1", "ParamNames": [
                            "MyOffset"
                        ], "FieldNames": [
                            "Account Number", "Tran Amount"
                        ]
                    }
                ]
            };
            this.LoadDataFromJSON(testdata);
            ko.applyBindings(this);

            //this.CreateFilterTest();
            console.log(this.SaveDataToJSON());
        };

        CodeBlock.prototype.CreateFilterTest = function () {
            var new_step = null;
            new_step = new IDE.Steps.NumberStep();
            new_step.StepName("tax");
            new_step.Value(5);
            this.UserSteps.push(new_step);

            new_step = new IDE.Steps.NumberStep();
            new_step.StepName("penalty");
            new_step.Value(6);
            this.UserSteps.push(new_step);

            var new_op = new IDE.Steps.OperatorStep();
            new_op.StepName("MyOffset");
            new_op.Operator("+");
            new_op.OperandVarNames.push("tax");
            new_op.OperandVarNames.push("penalty");
            this.UserSteps.push(new_op);

            //define (not call) the filter function
            var new_func = new IDE.Functions.FilterFunction();
            new_func.TypeName = "FilterFunction";
            new_func.FunctionName("GetAboveOffset");
            var new_contract = new IDE.Contracts.DatasetContract();
            new_contract.FieldsRequired.push("Account Number");
            new_contract.FieldsRequired.push("Tran Amount");
            new_func.DatasetContract(new_contract);
            var new_param = new IDE.Params.Param();
            new_param.ParamName("Offset");
            new_func.FunctionParams.push(new_param);

            //add the comparison to the filter function's body
            var new_comp = new IDE.Steps.OperatorStep();
            new_comp.Operator(">");
            new_comp.OperandVarNames.push("Dataset.Tran Amount"); //Dataset is the name of the dataset param sent to the filter function
            new_comp.OperandVarNames.push("Offset");
            new_func.AddStep(new_comp);

            this.ChildFunctions.push(new_func);

            //Add ther step that calls the filter function
            var call_filter_step = new IDE.Steps.CallFilterFunctionStep();
            this.UserSteps.push(call_filter_step); //important to add it to the steps first
            call_filter_step.DatasetName("Step 1");
            call_filter_step.FieldNames(this.GetDatasetFieldNames(call_filter_step, call_filter_step.DatasetName()));
            call_filter_step.FunctionName(new_func.FunctionName());
            call_filter_step.ParamNames(["MyOffset"]);
        };
        CodeBlock.prototype.LoadDataFromJSON = function (json_data) {
            var self = this;
            IDE.Utils.CopyPropertiesToKO(json_data, self);
            //for (var func_idx = 0; func_idx < json_functions.length; func_idx++) {
            //    var entry = json_functions[func_idx];
            //    var new_func: Functions.IFunction = null;
            //    if (entry.FunctionTypeName == "FilterFunction") {
            //        var new_filter_func = new Functions.FilterFunction();
            //        new_filter_func.LoadDataFromJSON(entry);
            //        new_func = new_filter_func;
            //    }
            //    self.ChildFunctions.push(new_func);
            //}
            //Utils.CopyPropertiesToKO(json_steps, this);
            //for (var step_idx = 0; step_idx < json_steps.length; step_idx++)
            //{
            //    var entry = json_steps[step_idx];
            //    console.log(entry);
            //    var new_step:Steps.IStep = null;
            //    if (entry.StepTypeName == "TableLoadStep")
            //    {
            //        var new_table = new Steps.TableLoadStep();
            //        new_table.LoadDataFromJSON(entry);
            //        new_step = new_table;
            //    }
            //    self.UserSteps.push(new_step);
            //}
        };

        CodeBlock.prototype.SaveDataToJSON = function () {
            var json_data = ko.toJSON(this);

            //var steps = this.UserSteps();
            //var field_names: Array<string> = null;
            ////foreach step, save to json
            //for (var step_idx = 0; step_idx < steps.length; step_idx++) {
            //    json_data += steps[step_idx].to
            //}
            return json_data;
        };

        //We will opass this function to the child steps so that they can call it to request the names of fields of steps before them
        CodeBlock.prototype.GetDatasetFieldNames = function (calling_step, dataset_name) {
            //find the calling step
            var steps = this.UserSteps();
            var field_names = null;

            for (var step_idx = 0; step_idx < steps.length; step_idx++) {
                if (steps[step_idx] == calling_step) {
                    break;
                }
                if (steps[step_idx].StepName() == dataset_name) {
                    field_names = steps[step_idx].FieldNames();
                }
            }
            return field_names;
        };
        return CodeBlock;
    })();
    IDE.CodeBlock = CodeBlock;
})(IDE || (IDE = {}));
//# sourceMappingURL=CodeBlock.js.map
