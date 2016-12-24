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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var app_service_1 = require("../app.service");
var router_1 = require("@angular/router");
var parameter_1 = require("./parameter");
var ParameterService = (function () {
    function ParameterService(router, http, appService) {
        this.router = router;
        this.http = http;
        this.appService = appService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.filter = new Filter();
        this.filter.value = "";
        // ["key","value"].forEach(a => this.filter.value.push(a));
    }
    ParameterService.prototype.getParameters = function (key) {
        // let params = new URLSearchParams();
        // this.filter.value = value;
        //  params.set('filter', JSON.stringify(this.filter));
        // return this.http.get('http://localhost:8888/'+ key+'.properties')
        //   .toPromise()
        //   // .then(response => Parameter.createOne(response.json().data) as Parameter)
        //    .then(response => {
        //     //  console.log(response.json().data);
        //      Parameter.createOne(response.text())
        //     })
        return this.http.get('http://localhost:8888/' + key + '.properties')
            .toPromise()
            .then(function (response) { return parameter_1.Parameter.createMany(response.text()); });
    };
    ParameterService.prototype.getAllParameters = function () {
        // let params = new URLSearchParams();
        // this.filter.value = value;
        //  params.set('filter', JSON.stringify(this.filter));
        return this.http.get('resources/parameters/list')
            .toPromise()
            .then(function (response) { return parameter_1.Parameter.createMany(response.json().data); });
    };
    ParameterService.prototype.add = function (parameter) {
    };
    ParameterService.prototype.delete = function (parameter) {
    };
    ParameterService.prototype.update = function (parameter) {
    };
    ParameterService.prototype.refresh = function (key) {
        return this.http.post('http://localhost:8888/bus/refresh', null)
            .toPromise()
            .then(function (response) { return parameter_1.Parameter.createMany(response.text()); });
    };
    return ParameterService;
}());
ParameterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, app_service_1.AppService])
], ParameterService);
exports.ParameterService = ParameterService;
var Filter = (function () {
    function Filter() {
    }
    return Filter;
}());
exports.Filter = Filter;
//# sourceMappingURL=parameter.service.js.map