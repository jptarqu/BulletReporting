/// <reference path="../../typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var IDE;
(function (IDE) {
    (function (Functions) {
        var FilterFunction = (function (_super) {
            __extends(FilterFunction, _super);
            function FilterFunction() {
                _super.apply(this, arguments);
                this.TypeName = "IDE.Functions.FilterFunction";
            }
            return FilterFunction;
        })(Functions.FunctionFromDataset);
        Functions.FilterFunction = FilterFunction;
    })(IDE.Functions || (IDE.Functions = {}));
    var Functions = IDE.Functions;
})(IDE || (IDE = {}));
//# sourceMappingURL=FilterFunction.js.map
