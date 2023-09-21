sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("demo.controller.View1", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();  
            },
            onListItemPress: function (oEvent) {
                console.log("welcome")
           //   var productPath = oEvent.oSource._aSelectedPaths[0]
                var    productPath = oEvent.getSource().getSelectedItem().getBindingContext().getPath().substring(1)
           //   var    ProductId = productPath.split("/").slice(-1).pop(); //productPath.substring(1)
                this.oRouter.navTo("detail",{ProductId : productPath});
            }
        });
    });
