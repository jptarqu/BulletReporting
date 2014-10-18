/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Functions {
    export class DataExtractionFunction implements IScope {
		
		ChildFunctions = ko.observableArray<Functions.IFunction>();
        UserSteps = ko.observableArray<Steps.DatasetValueStep>(); //only DatasetValueStep and static value steps can be used from DataExtractionFunctions
        AvailableSingleValueStepNames = ko.observableArray<string>();
        ReferenceDialog = new IDE.Dialogs.ReferenceDialog();
        CurrStepIdx = 0; 

        AddStep(step_type: string) {
            var new_step = Factory.Factories[step_type]();
            this.UserSteps.splice(this.CurrStepIdx, 0,new_step);
            this.CurrStepIdx++;
        }

        Test(): void {
            var testdata =
                {
                    "ChildFunctions": [
                        {
                            "TypeName": "IDE.Functions.FunctionFromDataset",
                            "DatasetContract": {
                                "FieldsRequired": [
                                    "Account Number",
                                    "Tran Amount"
                                ]
                            },
                            "FunctionName": "GetAboveOffset",
                            "FunctionParams": [
                                {
                                    "ParamName": "Offset",
                                    "TypeName": "IDE.Params.DataSetParam",
                                    "Fields": []
                                }
                            ],
                            "UserSteps": [
                                {
                                    "TypeName": "IDE.Steps.OperatorStep",
                                    "StepName": "",
                                    "Operator": ">",
                                    "OperandVarNames": [
                                        "Dataset.Tran Amount",
                                        "Offset"
                                    ]
                                }
                            ]
                        }
                    ],
                    "UserSteps": [
                        {
                            "StepName": "Step 1",
                            "FieldNames": [
                                "Account Number",
                                "Tran Amount"
                            ],
                            "TypeName": "IDE.Steps.TableLoadStep",
                            "Name": "Transactions"
                        },
                        {
                            "StepName": "Step 2",
                            "FieldNames": [],
                            "TypeName": "IDE.Steps.TableLoadStep",
                            "Name": "Accts"
                        },
                        {
                            "StepName": "tax",
                            "TypeName": "IDE.Steps.NumberStep",
                            "Value": 5
                        },
                        {
                            "StepName": "penalty",
                            "TypeName": "IDE.Steps.NumberStep",
                            "Value": 6
                        },
                        {
                            "TypeName": "IDE.Steps.OperatorStep",
                            "StepName": "MyOffset",
                            "Operator": "+",
                            "OperandVarNames": [
                                {
                                    "TypeName": "IDE.Expressions.StepReferenceSingleValue",
                                    "StepName": "tax"
                                },
                                {
                                    "TypeName": "IDE.Expressions.StepReferenceSingleValue",
                                    "StepName": "penalty"
                                }
                            ]
                        },
                        {
                            "StepName": "",
                            "FieldNames": [
                                "Account Number",
                                "Tran Amount"
                            ],
                            "TypeName": "IDE.Steps.CallFilterFunctionStep",
                            "FunctionName": "GetAboveOffset",
                            "DatasetName": "Step 1",
                            "ParamNames": [
                                "MyOffset"
                            ]
                        }
                    ],
                    "AvailableSingleValueStepNames": []
                } ;
            //this.LoadDataFromJSON(
            //    testdata
            //    );
            //this.CreateFilterTest();
            ko.applyBindings(this);
            console.log(this.SaveDataToJSON());
        }

        CreateFilterTest(): void {

            var load_table = new Steps.TableLoadStep();
            load_table.StepName("Step 1");
            load_table.Name("Transactions");
            load_table.FieldNames(["Account Number", "Tran Amount"]);

            //define (not call) the filter function
            var new_func = new Functions.FunctionFromDataset();
            new_func.FunctionName("GetAboveOffset");
            var new_contract = new Contracts.DatasetContract();
            new_contract.FieldsRequired.push("Account Number");
            new_contract.FieldsRequired.push("Tran Amount");
            new_func.DatasetContract(new_contract);

            var new_step: Steps.NumberStep = null;
            new_step = new Steps.NumberStep();
            new_step.StepName("tax");
            new_step.Value(5);
            new_func.UserSteps.push(new_step);

            new_step = new Steps.NumberStep();
            new_step.StepName("penalty");
            new_step.Value(6);
            new_func.UserSteps.push(new_step);

            var new_op = new Steps.OperatorStep();
            new_op.StepName("MyOffset");
            new_op.Operator("+");
            new_op.OperandVarNames.push(new IDE.Expressions.StepReferenceSingleValue("tax"));
            new_op.OperandVarNames.push(new IDE.Expressions.StepReferenceSingleValue("penalty"));
            new_func.UserSteps.push(new_op);
            
            //add the comparison to the filter function's body
            var new_comp = new Steps.OperatorStep();
            new_comp.Operator(">");
            new_comp.OperandVarNames.push(new IDE.Expressions.StepReferenceSingleValue("Dataset.Tran Amount")); //Dataset is the name of the dataset param sent to the filter function
            new_comp.OperandVarNames.push(new IDE.Expressions.StepReferenceSingleValue("Offset"));
            new_func.AddStep(new_comp);

            this.ChildFunctions.push(new_func);

            //Add ther step that calls the filter function
            var call_filter_step = new Steps.CallFilterFunctionStep();
            this.UserSteps.push(call_filter_step); //important to add it to the steps first
            call_filter_step.DatasetName("Step 1");
            call_filter_step.FieldNames(this.GetDatasetFieldNames(call_filter_step, call_filter_step.DatasetName()));
            call_filter_step.FunctionName(new_func.FunctionName());
            call_filter_step.ParamNames(["MyOffset"]);


		}
        LoadDataFromJSON(json_data: any): void {
            var self: DataExtractionFunction = this;
            Utils.CopyPropertiesToKO(json_data, self);

        }

        SaveDataToJSON(): string {
            var json_data = ko.toJSON(this);
            return json_data;
        }
        GetDBTableNames(): Array<string> {
            return ['TRANSACTIONS', 'CUSTOMERS'];
        }
        GetTableDescription(table_name: string): string {
            return "<p>This is the <strong>Help!</strong>.</p>";
        }
        GetDBTableFields(table_name: string): string[] {
            return ['ACCT_NUM', 'AMOUNT'];
        }
        //Called by the UI when the user is trying to select a table from the db.
        ShowAvailableDBTableNames(calling_step: IDE.Steps.TableLoadStep)// calling_reference: IDE.Expressions.StepReferenceSingleValue)
            : void {

            var db_tables = this.GetDBTableNames();
            this.ReferenceDialog.Display(
                (keyword: string) => {
                    if (keyword == "") {
                        return db_tables;
                    }
                    else {
                        return db_tables.filter(
                            (element: string) => element.indexOf(keyword) >= 0
                            )

                    }
                }
                ,
                this.GetTableDescription
                , (chosen_item: string) => {
                    var field_names = this.GetDBTableFields(chosen_item);
                    calling_step.SetReference(chosen_item, field_names);
                }
                , null
                );
        }

        //Called by the UI when the user is trying to select a single value reference.
        ShowAvailableSingleValueStepNames(calling_step: IDE.Steps.IDependsOnSingleValueSteps, calling_reference: IDE.Expressions.StepReferenceSingleValue): void {

            var db_fields = this.GetPreviousDatasetFieldNames(calling_step);
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

        RefreshAvailableSingleValueStepNames(calling_step: IDE.Steps.IStep): void {
            this.AvailableSingleValueStepNames.removeAll();
            var db_fields = this.GetPreviousDatasetFieldNames(calling_step);
            var var_fields = this.GetSingleValueNames(calling_step);
            this.AvailableSingleValueStepNames( db_fields.concat(var_fields) );
        }

        GetSingleValueNames(calling_step: IDE.Steps.IStep): Array<string> {
           
            var steps = this.UserSteps();
            var field_names: Array<string> = [];

            for (var step_idx = 0; step_idx < steps.length; step_idx++) {
                if (steps[step_idx] == calling_step) {
                    //reached the calling step, shoud not go futher into future steps
                    break;
                }
                if (steps[step_idx] instanceof  Steps.SingleValueStep) {
                    field_names.push((<Steps.SingleValueStep> steps[step_idx]).StepName());
                }
            }
            return field_names;
        }

        GetPreviousDatasetFieldNames(calling_step: IDE.Steps.IStep): Array<string> {
            //find the calling step
            var steps = this.UserSteps();
            var field_names: Array<string> = [];

            for (var step_idx = 0; step_idx < steps.length; step_idx++) {
                if (steps[step_idx] == calling_step) {
                    //reached the callinmg step, shoud not go futher into future steps
                    break;
                }
                if (steps[step_idx] instanceof Steps.DatasetValueStep ) {
                    field_names.concat((<Steps.IDatasetValueStep> steps[step_idx]).FieldNames());
                }
            }
            return field_names;
        }

        //We will opass this function to the child steps so that they can call it to request the names of fields of steps before them
        GetDatasetFieldNames(calling_step: IDE.Steps.IStep, dataset_name: string): Array<string> {
            //find the calling step
            var steps = this.UserSteps();  
            var field_names: Array<string> = null;

            for (var step_idx = 0; step_idx < steps.length; step_idx++) {
                if (steps[step_idx] == calling_step) {
                    //reached the callinmg step, shoud not go futher into future steps
                    break;
                }
                if (steps[step_idx].StepName() == dataset_name) {
                    field_names = (<Steps.IDatasetValueStep> steps[step_idx]).FieldNames();
                }
            }
            return field_names;
        }


        CreateFunctionFromDataset(step: Steps.CallFuncFromSetStep): void {
            var fields_required = this.GetDatasetFieldNames(step, step.DatasetName());
            var new_func = Factory.CreateFunctionFromDataset(fields_required);
            step.FunctionName(new_func.FunctionName() );
        }
    }
} 