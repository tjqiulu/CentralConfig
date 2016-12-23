"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var CommaSeparatedNumberPipe = (function () {
    function CommaSeparatedNumberPipe() {
    }
    CommaSeparatedNumberPipe.prototype.transform = function (value, mode, outputWithUnit) {
        var result = "";
        var count = 0;
        if (value != null && !isNaN(value)) {
            var numberString = value.toString();
            //######
            //   if(numberString.indexOf(".") == -1){
            for (var i = numberString.length - 1; i >= 0; i--) {
                if (count % 3 == 0 && count > 0) {
                    result = numberString.charAt(i) + "," + result;
                }
                else {
                    result = numberString.charAt(i) + result;
                }
                count++;
            }
        }
        return result;
    };
    CommaSeparatedNumberPipe = __decorate([
        core_1.Pipe({ name: 'commaSeparatedNumber' }), 
        __metadata('design:paramtypes', [])
    ], CommaSeparatedNumberPipe);
    return CommaSeparatedNumberPipe;
}());
exports.CommaSeparatedNumberPipe = CommaSeparatedNumberPipe;
//# sourceMappingURL=number.separator.js.map