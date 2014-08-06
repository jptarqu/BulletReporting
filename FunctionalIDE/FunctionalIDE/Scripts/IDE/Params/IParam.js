var IDE;
(function (IDE) {
    (function (Params) {
        var Param = (function () {
            function Param() {
                this.ParamName = ko.observable("");
            }
            return Param;
        })();
        Params.Param = Param;
    })(IDE.Params || (IDE.Params = {}));
    var Params = IDE.Params;
})(IDE || (IDE = {}));
//# sourceMappingURL=IParam.js.map
