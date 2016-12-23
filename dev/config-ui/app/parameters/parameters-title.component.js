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
var parameter_service_1 = require('./parameter.service');
var app_service_1 = require('./../app.service');
var app_model_1 = require('./../app.model');
var ParametersTitleComponent = (function () {
    function ParametersTitleComponent(router, parameterService, _appService) {
        this.router = router;
        this.parameterService = parameterService;
        this._appService = _appService;
    }
    ParametersTitleComponent.prototype.ngOnInit = function () {
        var pageInfo = new app_model_1.PageInfo([new app_model_1.Link("", "all parameters")], "Parameters List", "Welcome");
        this._appService.setPageInfo(pageInfo);
        // this.parameterService.getAllParameters().then(datas =>{ datas.forEach((data)=>{
        // let parameter
        // this.parameter.key = data.key;
        // this.parameter.value = data.value;
        // console.log("this.parameter");
        // console.log(this.parameter);
        // console.log(data);
        // this.parameters.push(data);
        // })
        // })
        // .catch(error => {
        //   console.error(error);
        //     //  this._appService.modalError.open("Failed to get campaigns ",error);
        //    });
        // this.parameterService.filterChangeEvent.subscribe( a =>{
        //   // console.debug( (<Filter>a).statuses.toJSON());
        //   this.parameterService.getParameters().then(parameters => this.setSlides(parameters))
        //   .catch(error => {
        //     console.error(error);
        //     //  this._appService.modalError.open("Failed to get campaigns ",error);
        //    });
        // });
        //  console.log(this.parameters);
    };
    // onSelect(campaign: Campaign) {
    //   this.router.navigate(['/campaign', campaign.id]);
    // }
    ParametersTitleComponent.prototype.setSlides = function (parameters) {
        console.log(parameters);
        var slides = new Array();
        var currentSlide;
        var id = 0;
        for (var _i = 0, parameters_1 = parameters; _i < parameters_1.length; _i++) {
            var parameter = parameters_1[_i];
            if ((id % 6) == 0) {
                currentSlide = new Slide();
                currentSlide.parameters = new Array();
                slides.push(currentSlide);
            }
            currentSlide.parameters.push(parameter);
            id++;
        }
        this.slides = slides;
        //this.slides = _.groupBy(campaigns, function (item, i) { return Math.floor(i / 6); });
    };
    ParametersTitleComponent.prototype.newParameter = function () {
        this.router.navigate(['/campaign/create']);
    };
    ParametersTitleComponent = __decorate([
        core_1.Component({
            selector: 'parameters-title',
            templateUrl: 'app/parameters/parameters-title.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, parameter_service_1.ParameterService, app_service_1.AppService])
    ], ParametersTitleComponent);
    return ParametersTitleComponent;
}());
exports.ParametersTitleComponent = ParametersTitleComponent;
var Slide = (function () {
    function Slide() {
    }
    return Slide;
}());
exports.Slide = Slide;
//# sourceMappingURL=parameters-title.component.js.map