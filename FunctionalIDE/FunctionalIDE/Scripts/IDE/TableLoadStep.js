/// <reference path="../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    var TableLoadStep = (function () {
        function TableLoadStep() {
            this.StepTypeName = "TableLoadStep";
            this.Name = ko.observable("");
        }
        TableLoadStep.prototype.LoadDataFromJSON = function (source) {
            // a utility that copies properties into this instance
            IDE.Utils.CopyPropertiesToKO(source, this);
        };
        return TableLoadStep;
    })();
    IDE.TableLoadStep = TableLoadStep;
})(IDE || (IDE = {}));
//# sourceMappingURL=TableLoadStep.js.map
