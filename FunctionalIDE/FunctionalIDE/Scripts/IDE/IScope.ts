/// <reference path="../typings/knockout/knockout.d.ts" />

module IDE {
    //A function definition. Functions are not supposed to modify state
    export interface IScope {
        UserSteps: KnockoutObservableArray<IDE.Steps.IStep>;

        //GetDatasetFieldNames(calling_step: IDE.Steps.IStep, dataset_name: string): Array<string>;
    
    }
}  