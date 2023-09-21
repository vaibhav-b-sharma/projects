sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("flexible.controller.View1", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this._bDescendingSort = false;
            },
            onListItemPress: function (oEvent) {
                // var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1),
                //     productPath = oEvent.getSource().getSelectedItem().getBindingContext("Products").getPath(),
                //     product = productPath.split("/").slice(-1).pop();
    
                this.oRouter.navTo("detail");
                //, {layout: oNextUIState.layout, product: product}
            }
        });
    });
