/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "flexible/model/models",
        "sap/base/util/UriParameters",
        "sap/f/library",
        "sap/f/FlexibleColumnLayoutSemanticHelper",
        "sap/ui/model/json/JSONModel",
    ],
    function (UIComponent, Device, models,UriParameters,library,FlexibleColumnLayoutSemanticHelper,JSONModel) {
        "use strict";
        var LayoutType = library.LayoutType;
        return UIComponent.extend("flexible.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                var oModel = new JSONModel();
                this.setModel(oModel);
                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },
            getHelper: function () {
                var oFCL = this.getRootControl().byId("fcl"),
                    oParams = UriParameters.fromQuery(location.search),
                    oSettings = {
                        defaultTwoColumnLayoutType: LayoutType.TwoColumnsMidExpanded,
                        mode: oParams.get("mode"),
                        maxColumnsCount: oParams.get("max")
                    };
                return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
            }
        });
    });