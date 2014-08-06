module IDE.Steps {
    //Steps that receive values resulting from single value operations (no dataset operations)
    export interface IDependsOnSteps {
		UpdateStepName(old_name: string, new_name: string): void;
    }
}  