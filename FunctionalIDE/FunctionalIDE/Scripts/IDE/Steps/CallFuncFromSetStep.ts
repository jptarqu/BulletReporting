/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    export class CallFuncFromSetStep extends DatasetValueStep {

        FunctionName = ko.observable<string>();
        DatasetName = ko.observable<string>();
    }
} 