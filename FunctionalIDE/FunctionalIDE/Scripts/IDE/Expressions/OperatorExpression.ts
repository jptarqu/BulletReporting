/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Expressions {
    export class OperatorExpression {
        ExpressionTypeName = "OperatorExpression";
        Operator = ko.observable<String>();
        OperandVarNames = ko.observable<String>(); //Important! we just want the name of the step or param

        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}  