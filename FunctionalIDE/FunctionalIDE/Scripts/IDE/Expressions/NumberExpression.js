/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Expressions) {
        var NumberExpression = (function () {
            function NumberExpression() {
                this.ExpressionTypeName = "NumberExpression";
                this.Value = ko.observable();
            }
            NumberExpression.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return NumberExpression;
        })();
        Expressions.NumberExpression = NumberExpression;
    })(IDE.Expressions || (IDE.Expressions = {}));
    var Expressions = IDE.Expressions;
})(IDE || (IDE = {}));
//# sourceMappingURL=NumberExpression.js.map
