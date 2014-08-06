/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Steps) {
        var TableLoadStep = (function () {
            function TableLoadStep() {
                this.TypeName = "IDE.Steps.TableLoadStep";
                this.StepName = ko.observable("");
                this.Name = ko.observable("");
                this.FieldNames = ko.observableArray();
            }
            TableLoadStep.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return TableLoadStep;
        })();
        Steps.TableLoadStep = TableLoadStep;
    })(IDE.Steps || (IDE.Steps = {}));
    var Steps = IDE.Steps;
})(IDE || (IDE = {}));
//# sourceMappingURL=TableLoadStep.js.map
