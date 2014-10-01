module IDE.Steps {
    //Steps that receive values resulting from single value operations (no dataset operations)
    export interface IDependsOnSingleValueSteps {
        UpdateStepName(old_name: string, new_name: string): void;
        SetReference(reference_name: string, index: number): void;
    }
}  