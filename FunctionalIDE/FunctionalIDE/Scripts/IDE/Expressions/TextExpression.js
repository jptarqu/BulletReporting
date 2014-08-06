/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Expressions) {
        var DateExpression = (function () {
            function DateExpression() {
                this.ExpressionTypeName = "DateExpression";
                this.Year = ko.observable();
                this.Month = ko.observable();
                this.Day = ko.observable();
            }
            DateExpression.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return DateExpression;
        })();
        Expressions.DateExpression = DateExpression;
    })(IDE.Expressions || (IDE.Expressions = {}));
    var Expressions = IDE.Expressions;
})(IDE || (IDE = {}));
//# sourceMappingURL=TextExpression.js.map
