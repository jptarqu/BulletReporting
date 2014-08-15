/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Dialogs {
    //A function definition. Functions are not supposed to modify state
    export interface HelpCallback {
        (item_name: string) : string;
    }
}  