/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Functions) {
        var UserFunction = (function () {
            function UserFunction() {
                this.DatasetContracts = ko.observableArray();
                this.Steps = ko.observableArray();
            }
            UserFunction.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return UserFunction;
        })();
        Functions.UserFunction = UserFunction;
    })(IDE.Functions || (IDE.Functions = {}));
    var Functions = IDE.Functions;
})(IDE || (IDE = {}));
//# sourceMappingURL=UserFunction.js.map
