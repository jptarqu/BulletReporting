/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Steps) {
        var NumberStep = (function () {
            function NumberStep() {
                this.StepTypeName = "NumberStep";
                this.StepName = ko.observable("");
                this.Value = ko.observable(0);
            }
            NumberStep.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return NumberStep;
        })();
        Steps.NumberStep = NumberStep;
    })(IDE.Steps || (IDE.Steps = {}));
    var Steps = IDE.Steps;
})(IDE || (IDE = {}));
//# sourceMappingURL=NumberStep.js.map
