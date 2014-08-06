/// <reference path="../../typings/knockout/knockout.d.ts" />
var IDE;
(function (IDE) {
    (function (Expressions) {
        var TextExpression = (function () {
            function TextExpression() {
                this.ExpressionTypeName = "TextExpression";
                this.Value = ko.observable();
            }
            TextExpression.prototype.LoadDataFromJSON = function (source) {
                // a utility that copies properties into this instance
                IDE.Utils.CopyPropertiesToKO(source, this);
            };
            return TextExpression;
        })();
        Expressions.TextExpression = TextExpression;
    })(IDE.Expressions || (IDE.Expressions = {}));
    var Expressions = IDE.Expressions;
})(IDE || (IDE = {}));
//# sourceMappingURL=DateExpression.js.map
