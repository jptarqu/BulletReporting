/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Expressions {
    export class NumberExpression {
        ExpressionTypeName = "NumberExpression";
        Value = ko.observable<Number>();


        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}  