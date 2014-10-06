module IDE.Steps {
    //Steps that receive values resulting from single value operations (no dataset operations)
    export interface IDependsOnSingleValueSteps extends IDE.Steps.IStep {
        UpdateStepName(old_name: string, new_name: string): void;
        RemoveReference( reference: IDE.Expressions.StepReferenceSingleValue ): void;
    }
}  