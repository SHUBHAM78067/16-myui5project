//Scaffolding , AMD
sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function(JSONModel) {
    return {
        createJSONModel: function(filePath){
            //Step 1: Create a brand new model object
            var oModel = new JSONModel();

            //Step 2: Set or Load data into the model
            oModel.loadData(filePath);
            // oModel.setData({
            //     "empStr": {
            //         "empId": "1003",
            //         "empName": "Anubhav",
            //         "salary": 9000,
            //         "currency": "AED",
            //         "smoker": true,
            //         "gender": "M",
            //         "mStat": "S",
            //         "rating": 4,
            //         "city": "Gurgaon",
            //         "country": "IN"
            //     }
            // });

            //oModel.setDefaultBindingMode("OneWay");

            return oModel;
        },
        createXMLModel: function(){

        },
        createResourceModel: function(){
            
        }
    };
});