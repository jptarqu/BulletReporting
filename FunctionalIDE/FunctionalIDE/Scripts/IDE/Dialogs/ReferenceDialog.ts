/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Dialogs {
    export class ReferenceDialog  {
        TypeName = "IDE.Dialogs.ReferenceDialog";

        SearchFunction: SearchCallback; //passed by callers to allow search
        HelpFunction: HelpCallback; //passed by callers to disaply help on a item selected

        SearchEntry = ko.observable<string>("");
        SearchResults = ko.observableArray<string>([]);
        Help = ko.observable<string>("");
        IsVisible = ko.observable<boolean>(true);

        Display(search_func: SearchCallback, help_func: HelpCallback): void {
            this.SearchFunction = search_func;
            this.HelpFunction = help_func;
            this.IsVisible(true);
            this.PerformSearch(); //default search
        }

        PerformSearch(): void {
            var results = this.SearchFunction(this.SearchEntry());
            this.SearchResults(results);
        }

        
    }
}   