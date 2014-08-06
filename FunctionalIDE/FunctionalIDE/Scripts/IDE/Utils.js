var IDE;
(function (IDE) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.CopyPropertiesToKO = function (source, target) {
            for (var prop in source) {
                //if the property exists in the ViewModel and is an observable, then populate it
                if (target[prop] !== undefined && $.isFunction(target[prop])) {
                    if ($.isArray(source[prop])) {
                        //it is an observable array
                        var items = source[prop];
                        var observable_array = target[prop];
                        for (var item_idx = 0; item_idx < items.length; item_idx++) {
                            var source_item = items[item_idx];
                            var type_name = source_item["TypeName"];
                            var new_item = this.Factories[type_name]();
                            this.CopyPropertiesToKO(source_item, new_item);
                            observable_array.push(new_item);
                        }
                    } else if (source[prop]["TypeName"] !== undefined) {
                        //if the property is a complex object observable (defines TypeName) then create an empty version of it and call LoadDataFromJSON on it to let it handle its own deserialization
                        var type_name = source[prop]["TypeName"];
                        target[prop](this.Factories[type_name]()); //create empty obj
                        target[prop].LoadDataFromJSON(source[prop]);
                    } else {
                        target[prop](source[prop]);
                    }
                }
            }
        };
        Utils.Factories = {
            "IDE.Functions.FilterFunction": function () {
                return new IDE.Functions.FilterFunction();
            },
            "IDE.Params.DataSetParam": function () {
                return new IDE.Params.DataSetParam();
            },
            "IDE.Steps.CallFilterFunctionStep": function () {
                return new IDE.Steps.CallFilterFunctionStep();
            },
            "IDE.Steps.DateStep": function () {
                return new IDE.Steps.DateStep();
            },
            "IDE.Steps.FieldStep": function () {
                return new IDE.Steps.DateStep();
            },
            "IDE.Steps.NumberStep": function () {
                return new IDE.Steps.NumberStep();
            },
            "IDE.Steps.OperatorStep": function () {
                return new IDE.Steps.OperatorStep();
            },
            "IDE.Steps.TableLoadStep": function () {
                return new IDE.Steps.TableLoadStep();
            },
            "IDE.Steps.TextStep": function () {
                return new IDE.Steps.TextStep();
            }
        };
        return Utils;
    })();
    IDE.Utils = Utils;
})(IDE || (IDE = {}));
//# sourceMappingURL=Utils.js.map
