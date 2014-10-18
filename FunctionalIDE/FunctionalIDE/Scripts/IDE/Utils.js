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
                            var new_item;
                            if (type_name !== undefined) {
                                new_item = IDE.Factory.Factories[type_name]();
                                this.CopyPropertiesToKO(source_item, new_item);
                            } else {
                                new_item = source_item;
                            }
                            observable_array.push(new_item);
                        }
                    } else if (source[prop]["TypeName"] !== undefined) {
                        //if the property is a complex object observable (defines TypeName) then create an empty version of it and call LoadDataFromJSON on it to let it handle its own deserialization
                        var type_name = source[prop]["TypeName"];
                        target[prop](IDE.Factory.Factories[type_name]()); //create empty obj
                        target[prop].LoadDataFromJSON(source[prop]);
                    } else {
                        target[prop](source[prop]);
                    }
                }
            }
        };
        return Utils;
    })();
    IDE.Utils = Utils;
})(IDE || (IDE = {}));
//# sourceMappingURL=Utils.js.map
