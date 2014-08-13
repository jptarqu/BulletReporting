/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Steps) {
        var FieldStep = (function () {
            function FieldStep() {
                this.TypeName = "IDE.Steps.FieldStep";
                this.StepName = ko.observable("");
                this.FieldName = ko.observable("");
            }
            FieldStep.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return FieldStep;
        })();
        Steps.FieldStep = FieldStep;
    })(IDE.Steps || (IDE.Steps = {}));
    var Steps = IDE.Steps;
})(IDE || (IDE = {}));
//# sourceMappingURL=FieldStep.js.map
