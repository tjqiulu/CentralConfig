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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var about_component_1 = require('./about.component');
var parameters_module_1 = require('./parameters/parameters.module');
var components_module_1 = require('./components/components.module');
var app_routing_1 = require('./app.routing');
var ng2_popover_1 = require("ng2-popover");
var app_service_1 = require('./app.service');
var forms_1 = require('@angular/forms');
var loading_indicator_1 = require('./components/loading.indicator');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, platform_browser_1.BrowserModule, app_routing_1.routing, parameters_module_1.ParameterModule, ng2_popover_1.PopoverModule, http_1.HttpModule, http_1.JsonpModule, components_module_1.ComponentModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, about_component_1.AboutComponent, loading_indicator_1.LoadingIndicator],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map