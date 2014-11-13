/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Dialogs {
    export class ReferenceDialog  {

        TypeName = "IDE.Dialogs.ReferenceDialog";

        OnSelectFunction: OnSelectCallback; //passed by callers to allow returning chosen item
        SearchFunction: SearchCallback; //passed by callers to allow search
        HelpFunction: HelpCallback; //passed by callers to disaply help on a item selected
        OnDeleteFunction: OnDeleteCallback; //passed by callers to handle a request to delete reference

        SearchEntry = ko.observable<string>("");
        SearchResults = ko.observableArray<string>([]);
        SelectedEntry = ko.observable<string>("");
        Help = ko.observable<string>("");
        IsVisible = ko.observable<boolean>(true);

        HtmlElem  = null;
        constructor() {
        }

        Display(search_func: SearchCallback, help_func: HelpCallback,
            chosen_func: OnSelectCallback,
            del_func: OnDeleteCallback
            //default_value: string
            ): void {
            this.SearchFunction = search_func;
            this.HelpFunction = help_func;
            this.OnSelectFunction = chosen_func;
            this.OnDeleteFunction = del_func;
            this.IsVisible(true);
            this.PerformSearch(); //default search
            this.HtmlElem.modal();
        }

        PerformSearch(): void {
            var results = this.SearchFunction(this.SearchEntry());
            this.SearchResults(results);
        }
        ChooseResult(): void {
            this.OnSelectFunction(this.SelectedEntry());
            this.IsVisible(false);
        }
        DeleteReference(): void {
            this.OnDeleteFunction();
            this.IsVisible(false);
        }


        
    }
}   