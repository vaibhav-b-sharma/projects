sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
      "use strict";
      return BaseController.extend("demo.controller.detail", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
		      	this.oModel = this.getOwnerComponent().getModel();
	        	this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched,this);
        },
        _onProductMatched: function (oEvent) {
			this._product = oEvent.getParameter("arguments").ProductId || this._product || "0";
			this.getView().bindElement({
				path: '/' + this._product
			});
        }
      });
    }
  );
  