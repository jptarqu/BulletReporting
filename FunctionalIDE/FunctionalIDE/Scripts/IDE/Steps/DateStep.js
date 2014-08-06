/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Steps) {
        var DateStep = (function () {
            function DateStep() {
                this.TypeName = "IDE.Steps.DateStep";
                this.StepTypeName = "DateStep";
                this.StepName = ko.observable("");
                this.Year = ko.observable();
                this.Month = ko.observable();
                this.Day = ko.observable();
            }
            DateStep.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return DateStep;
        })();
        Steps.DateStep = DateStep;
    })(IDE.Steps || (IDE.Steps = {}));
    var Steps = IDE.Steps;
})(IDE || (IDE = {}));
//# sourceMappingURL=DateStep.js.map
