/// <reference path="../../typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var IDE;
(function (IDE) {
    (function (Params) {
        //maybe we will use it, maybe not
        var DataSetParam = (function (_super) {
            __extends(DataSetParam, _super);
            function DataSetParam() {
                _super.apply(this, arguments);
                this.TypeName = "IDE.Params.DataSetParam";
                this.Fields = ko.observableArray();
            }
            DataSetParam.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return DataSetParam;
        })(Params.Param);
        Params.DataSetParam = DataSetParam;
    })(IDE.Params || (IDE.Params = {}));
    var Params = IDE.Params;
})(IDE || (IDE = {}));
//# sourceMappingURL=DataSetParam.js.map
