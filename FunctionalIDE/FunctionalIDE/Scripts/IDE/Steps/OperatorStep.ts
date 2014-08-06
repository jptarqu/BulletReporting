/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    export class OperatorStep implements IStep, ISingleValueStep, IDependsOnSteps {
        TypeName: string = "IDE.Steps.OperatorStep";
        StepTypeName = "OperatorStep";
        StepName = ko.observable<string>("");
        Operator = ko.observable<String>();
        OperandVarNames = ko.observableArray<String>(); //Important! we just want the name of the step or param

		UpdateStepName(old_name: string, new_name: string): void
		{
			//TODO: find in OperandVarNames and replace
		}
		
        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
		
    }
}  