/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Contracts) {
        var DatasetContract = (function () {
            function DatasetContract(names) {
                this.FieldsRequired = ko.observableArray();
                this.FieldsRequired(names);
            }
            DatasetContract.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return DatasetContract;
        })();
        Contracts.DatasetContract = DatasetContract;
    })(IDE.Contracts || (IDE.Contracts = {}));
    var Contracts = IDE.Contracts;
})(IDE || (IDE = {}));
//# sourceMappingURL=DatasetContract.js.map
