module IDE.Steps {
    //Steps that receive values resulting from single value operations (no dataset operations)
    export class SingleValueStep implements ISingleValueStep {
        TypeName: string;
        StepName = ko.observable<string>("");
    }
}  