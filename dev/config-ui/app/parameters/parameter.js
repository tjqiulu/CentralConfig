"use strict";
var Parameter = (function () {
    function Parameter() {
        this.ifEdit = false;
    }
    Parameter.createOne = function (textData) {
        // console.log(jsonData);
        var parameter = new Parameter();
        // textData.replace(textData.indexOf(':'), "")
        // let textDataArr = textData.split(':');
        // for (let prop in textDataArr) {
        //   parameter[prop] = textData[prop];
        // }
        var splitIndex = textData.indexOf(":");
        parameter.key = textData.substring(0, splitIndex);
        parameter.value = textData.substring(splitIndex + 1);
        return parameter;
    };
    Parameter.createMany = function (textDatas) {
        var result = new Array();
        console.log(textDatas);
        var textDatasArr = textDatas.split('\n');
        for (var _i = 0, textDatasArr_1 = textDatasArr; _i < textDatasArr_1.length; _i++) {
            var item = textDatasArr_1[_i];
            result.push(Parameter.createOne(item));
        }
        return result;
    };
    return Parameter;
}());
exports.Parameter = Parameter;
var Parameters = (function () {
    function Parameters() {
    }
    return Parameters;
}());
exports.Parameters = Parameters;
//# sourceMappingURL=parameter.js.map