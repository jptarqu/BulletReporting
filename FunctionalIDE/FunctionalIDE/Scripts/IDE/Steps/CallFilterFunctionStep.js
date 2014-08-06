/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Steps) {
        var CallFilterFunctionStep = (function () {
            function CallFilterFunctionStep() {
                this.TypeName = "IDE.Steps.CallFilterFunctionStep";
                this.StepName = ko.observable("");
                this.FunctionName = ko.observable();
                this.DatasetName = ko.observable();
                this.ParamNames = ko.observableArray();
                this.FieldNames = ko.observableArray();
            }
            CallFilterFunctionStep.prototype.AddParam = function (param) {
                this.ParamNames.push(param);
            };
            CallFilterFunctionStep.prototype.RemoveParam = function (param) {
                this.ParamNames.remove(param);
            };

            CallFilterFunctionStep.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return CallFilterFunctionStep;
        })();
        Steps.CallFilterFunctionStep = CallFilterFunctionStep;
    })(IDE.Steps || (IDE.Steps = {}));
    var Steps = IDE.Steps;
})(IDE || (IDE = {}));
//# sourceMappingURL=CallFilterFunctionStep.js.map
