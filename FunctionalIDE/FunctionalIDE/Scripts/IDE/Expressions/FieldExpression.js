/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Expressions) {
        var FieldExpression = (function () {
            function FieldExpression() {
                this.ExpressionTypeName = "FieldExpression";
                this.FieldName = ko.observable();
            }
            FieldExpression.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return FieldExpression;
        })();
        Expressions.FieldExpression = FieldExpression;
    })(IDE.Expressions || (IDE.Expressions = {}));
    var Expressions = IDE.Expressions;
})(IDE || (IDE = {}));
//# sourceMappingURL=FieldExpression.js.map
