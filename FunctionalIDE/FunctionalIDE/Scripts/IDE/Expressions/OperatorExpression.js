/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Expressions) {
        var OperatorExpression = (function () {
            function OperatorExpression() {
                this.ExpressionTypeName = "OperatorExpression";
                this.Operator = ko.observable();
                this.OperandVarNames = ko.observable();
            }
            OperatorExpression.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return OperatorExpression;
        })();
        Expressions.OperatorExpression = OperatorExpression;
    })(IDE.Expressions || (IDE.Expressions = {}));
    var Expressions = IDE.Expressions;
})(IDE || (IDE = {}));
//# sourceMappingURL=OperatorExpression.js.map
