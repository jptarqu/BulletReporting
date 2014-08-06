/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Expressions {
    export class TextExpression {
        ExpressionTypeName = "TextExpression";
        Value = ko.observable<String>();


        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}  