
module IDE.Steps {
    export interface IStep {
        TypeName: string;
        StepName: KnockoutObservable<string>;
    }
} 