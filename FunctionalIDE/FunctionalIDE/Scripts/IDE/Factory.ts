
module IDE {
    export class Factory {
        public static Factories: Object = {
            "IDE.Functions.FilterFunction": () => { return new IDE.Functions.FilterFunction(); },
            "IDE.Params.DataSetParam": () => { return new IDE.Params.DataSetParam(); },
            "IDE.Steps.CallFilterFunctionStep": () => {
                var new_step = new IDE.Steps.CallFilterFunctionStep();
                new_step.StepName("CallFilterFunction");
                return new_step;
            },
            "IDE.Steps.DateStep": () => {
                var new_step = new IDE.Steps.DateStep();
                new_step.StepName("Date");
                return new_step;
            },
            "IDE.Steps.FieldStep": () => {
                var new_step = new IDE.Steps.FieldStep();
                new_step.StepName("Field");
                return new_step;
            },
            "IDE.Steps.NumberStep": () => {
                var new_step = new IDE.Steps.NumberStep();
                new_step.StepName("Number");
                return new_step;
            },
            "IDE.Steps.OperatorStep": () => {
                var new_step = new IDE.Steps.OperatorStep();
                new_step.StepName("Operation");
                return new_step;
            },
            "IDE.Steps.TableLoadStep": () => {
                var new_step = new IDE.Steps.TableLoadStep();
                new_step.StepName("TableLoad");
                return new_step;
            },
            "IDE.Steps.TextStep": () => {
                var new_step = new IDE.Steps.TextStep();
                new_step.StepName("Text");
                return new_step;
            },
            "IDE.Expressions.StepReferenceSingleValue": () => { return new IDE.Expressions.StepReferenceSingleValue(""); }
        };

        //public static CreateFunctionFromDataset(data_fields_to_use: Array<string>): IDE.Functions.FunctionFromDataset  {
        //    var func = new IDE.Functions.FunctionFromDataset();
        //    func.FunctionName("NewFunction");

        //    var new_contract = new Contracts.DatasetContract();
        //    for (var field_idx = 0; field_idx < data_fields_to_use.length; field_idx++) {
        //        new_contract.FieldsRequired.push(data_fields_to_use[field_idx]);
        //    }
        //    func.DatasetContract(new_contract);
        //    return func;
        //}

    }
}