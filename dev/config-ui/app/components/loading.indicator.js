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
var core_1 = require('@angular/core');
var LoadingIndicator = (function () {
    function LoadingIndicator() {
    }
    LoadingIndicator = __decorate([
        core_1.Component({
            selector: 'loading-indicator',
            template: "\n     <div style=\"margin-left:45%; margin-top:10%;\"> \n     <!-- <div style=\"text-align:center; vertical-align:middle;\"> -->\n       <!--   <span><i class=\"fa fa-spinner fa-pulse fa-fw fa-5x\"></i></span>-->\n        <div class=\"loader\"></div> \n        <!-- <div class=\"loading\">Loading&#8230;</div>-->\n     </div> \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingIndicator);
    return LoadingIndicator;
}());
exports.LoadingIndicator = LoadingIndicator;
// export class LoadingPage {
//     public loading: boolean;
//     constructor(val: boolean) {
//         this.loading = val;
//     }
//     standby() {
//         this.loading = true;
//     }
//     ready() {
//         this.loading = false;
//     }
// } 
//# sourceMappingURL=loading.indicator.js.map