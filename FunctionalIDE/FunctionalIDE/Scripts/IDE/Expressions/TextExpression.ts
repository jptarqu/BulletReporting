/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Expressions {
    export class DateExpression {
        ExpressionTypeName = "DateExpression";
        Year = ko.observable<Number>();
        Month = ko.observable<Number>();
        Day = ko.observable<Number>();


        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}  