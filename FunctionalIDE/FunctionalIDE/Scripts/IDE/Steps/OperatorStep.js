/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Steps) {
        var OperatorStep = (function () {
            function OperatorStep() {
                this.TypeName = "IDE.Steps.OperatorStep";
                this.StepName = ko.observable("");
                this.Operator = ko.observable();
                this.OperandVarNames = ko.observableArray();
            }
            OperatorStep.prototype.UpdateStepName = function (old_name, new_name) {
                //not used
            };

            OperatorStep.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };

            OperatorStep.prototype.SetReference = function (reference_name, index) {
                //not used
            };

            OperatorStep.prototype.AddOperand = function () {
                this.OperandVarNames.push(new IDE.Expressions.StepReferenceSingleValue(""));
            };
            return OperatorStep;
        })();
        Steps.OperatorStep = OperatorStep;
    })(IDE.Steps || (IDE.Steps = {}));
    var Steps = IDE.Steps;
})(IDE || (IDE = {}));
//# sourceMappingURL=OperatorStep.js.map
