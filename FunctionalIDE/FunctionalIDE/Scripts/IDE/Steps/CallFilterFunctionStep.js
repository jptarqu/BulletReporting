/// <reference path="../../typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var IDE;
(function (IDE) {
    (function (Steps) {
        var CallFilterFunctionStep = (function (_super) {
            __extends(CallFilterFunctionStep, _super);
            function CallFilterFunctionStep() {
                _super.apply(this, arguments);
                this.TypeName = "IDE.Steps.CallFilterFunctionStep";
                this.FunctionName = ko.observable();
                this.DatasetName = ko.observable();
                this.ParamNames = ko.observableArray();
            }
            //FieldNames = ko.observableArray<string>(); //for filter functions the FieldNames would be the same as the names of the passed dataset
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
        })(Steps.DatasetValueStep);
        Steps.CallFilterFunctionStep = CallFilterFunctionStep;
    })(IDE.Steps || (IDE.Steps = {}));
    var Steps = IDE.Steps;
})(IDE || (IDE = {}));
//# sourceMappingURL=CallFilterFunctionStep.js.map
