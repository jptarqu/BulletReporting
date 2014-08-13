﻿/// <reference path="../../typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var IDE;
(function (IDE) {
    (function (Steps) {
        var TableLoadStep = (function (_super) {
            __extends(TableLoadStep, _super);
            function TableLoadStep() {
                _super.apply(this, arguments);
                this.TypeName = "IDE.Steps.TableLoadStep";
                this.Name = ko.observable("");
            }
            TableLoadStep.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return TableLoadStep;
        })(Steps.DatasetValueStep);
        Steps.TableLoadStep = TableLoadStep;
    })(IDE.Steps || (IDE.Steps = {}));
    var Steps = IDE.Steps;
})(IDE || (IDE = {}));
//# sourceMappingURL=TableLoadStep.js.map
