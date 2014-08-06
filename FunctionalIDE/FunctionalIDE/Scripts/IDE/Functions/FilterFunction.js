/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Functions) {
        var FilterFunction = (function () {
            function FilterFunction() {
                this.TypeName = "IDE.Functions.FilterFunction";
                this.DatasetContract = ko.observable();
                this.FunctionName = ko.observable("");
                this.FunctionParams = ko.observableArray();
                this.UserSteps = ko.observableArray();
            }
            FilterFunction.prototype.AddStep = function (new_step) {
                this.UserSteps.push(new_step);
            };
            FilterFunction.prototype.RemoveStep = function (del_step) {
                this.UserSteps.remove(del_step);
            };

            FilterFunction.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };

            //We will opass this function to the child steps so that they can call it to request the names of fields of steps before them
            FilterFunction.prototype.GetDatasetFieldNames = function (calling_step, dataset_name) {
                //find the calling step
                var field_contracts = this.DatasetContract().FieldsRequired();
                return field_contracts;
            };
            return FilterFunction;
        })();
        Functions.FilterFunction = FilterFunction;
    })(IDE.Functions || (IDE.Functions = {}));
    var Functions = IDE.Functions;
})(IDE || (IDE = {}));
//# sourceMappingURL=FilterFunction.js.map
