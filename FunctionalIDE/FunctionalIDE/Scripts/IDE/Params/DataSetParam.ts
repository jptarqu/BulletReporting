/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Params {
//maybe we will use it, maybe not
    export class DataSetParam extends Param {

        TypeName = "IDE.Params.DataSetParam";
        Fields = ko.observableArray<IDE.Expressions.FieldExpression>();

        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }
    }
}  