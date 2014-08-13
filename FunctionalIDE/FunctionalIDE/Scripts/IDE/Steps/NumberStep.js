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
        var NumberStep = (function (_super) {
            __extends(NumberStep, _super);
            function NumberStep() {
                _super.apply(this, arguments);
                this.TypeName = "IDE.Steps.NumberStep";
                //StepName = ko.observable<string>("");
                this.Value = ko.observable(0);
            }
            NumberStep.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return NumberStep;
        })(Steps.SingleValueStep);
        Steps.NumberStep = NumberStep;
    })(IDE.Steps || (IDE.Steps = {}));
    var Steps = IDE.Steps;
})(IDE || (IDE = {}));
//# sourceMappingURL=NumberStep.js.map
