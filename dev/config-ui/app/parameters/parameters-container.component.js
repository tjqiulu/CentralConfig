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
var router_1 = require('@angular/router');
// import { CampaignService } from './campaign.service';
var app_service_1 = require('./../app.service');
var app_model_1 = require('./../app.model');
var ParametersContainerComponent = (function () {
    function ParametersContainerComponent(_router, 
        // private campaignService: CampaignService, 
        _appService) {
        this._router = _router;
        this._appService = _appService;
    }
    ParametersContainerComponent.prototype.ngOnInit = function () {
        var pageInfo = new app_model_1.PageInfo([new app_model_1.Link("", "all parameters")], "Parameters List", "Welcome & have a good day~");
        this._appService.setPageInfo(pageInfo);
    };
    ParametersContainerComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/parameters/parameters-container.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.AppService])
    ], ParametersContainerComponent);
    return ParametersContainerComponent;
}());
exports.ParametersContainerComponent = ParametersContainerComponent;
//# sourceMappingURL=parameters-container.component.js.map