sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("employees.emp.controller.View2", {
            onInit: function () {

            },
            onCreate: function () {
                var oEntry = {};
                oEntry.Id = this.getView().byId("iID").getValue();
                oEntry.FirstName = this.getView().byId("iFirstName").getValue();
                oEntry.LastName = this.getView().byId("iLastName").getValue();
                // oEntry.Gender = this.getView().byId("iID").getValue();
                // oEntry.DOB = this.getView().byId("iDOB").getValue();
                oEntry.Salary = this.getView().byId("iSalary").getValue();

                var mParameters = { 
                    sucess : this.onCreateSucess,
                    error  : this.onCreateError
                 };

                var oModel = this.getOwnerComponent.getModel();
                var customHeaders = "Content-Type: application/json"; 
                oModel.setHeaders(customHeaders);
                oModel.create('/EmployeeSet', oEntry, mParameters);     

            },

            onCreateSucess: function (oData, response) { 
                   alert("Sucess");
            },
            onCreateError: function (oError) { 
                alert("Error");
            }            

        });
    });