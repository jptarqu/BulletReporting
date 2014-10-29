
module IDE {
    export class Factory {
        public static Factories: Object = {
            "IDE.Functions.FilterFunction": () => { return new IDE.Functions.FilterFunction(); },
            "IDE.Params.DataSetParam": () => { return new IDE.Params.DataSetParam(); },
            "IDE.Steps.CallFilterFunctionStep": () => { return new IDE.Steps.CallFilterFunctionStep(); },
            "IDE.Steps.DateStep": () => { return new IDE.Steps.DateStep(); },
            "IDE.Steps.FieldStep": () => { return new IDE.Steps.DateStep(); },
            "IDE.Steps.NumberStep": () => { return new IDE.Steps.NumberStep(); },
            "IDE.Steps.OperatorStep": () => { return new IDE.Steps.OperatorStep(); },
            "IDE.Steps.TableLoadStep": () => { return new IDE.Steps.TableLoadStep(); },
            "IDE.Steps.TextStep": () => { return new IDE.Steps.TextStep(); },
            "IDE.Expressions.StepReferenceSingleValue": () => { return new IDE.Expressions.StepReferenceSingleValue(""); }
        };

        public static CreateFunctionFromDataset(data_fields_to_use: Array<string>): IDE.Functions.FunctionFromDataset  {
            var func = new IDE.Functions.FunctionFromDataset();
            func.FunctionName("NewFunction");

            var new_contract = new Contracts.DatasetContract();
            for (var field_idx = 0; field_idx < data_fields_to_use.length; field_idx++) {
                new_contract.FieldsRequired.push(data_fields_to_use[field_idx]);
            }
            func.DatasetContract(new_contract);
            return func;
        }

    }
}