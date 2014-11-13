
module IDE.Dialogs {
    export class DialogService {
        static Dialog: ReferenceDialog = new ReferenceDialog();

        public static SetDialogElement(): void {
            var div_dialog : any = $("#ReferenceDialog");
            div_dialog.modal({
                keyboard: false
            });

            this.Dialog.HtmlElem = div_dialog;
        }
    }
} 