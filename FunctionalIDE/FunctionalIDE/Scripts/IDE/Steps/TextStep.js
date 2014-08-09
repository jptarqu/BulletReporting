/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Steps) {
        var TextStep = (function () {
            function TextStep() {
                this.TypeName = "IDE.Steps.TextStep";
                this.StepName = ko.observable("");
                this.Value = ko.observable();
            }
            TextStep.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return TextStep;
        })();
        Steps.TextStep = TextStep;
    })(IDE.Steps || (IDE.Steps = {}));
    var Steps = IDE.Steps;
})(IDE || (IDE = {}));
//# sourceMappingURL=TextStep.js.map
