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
var router_1 = require("@angular/router");
var parameter_1 = require("./parameter");
var parameter_service_1 = require("./parameter.service");
var app_service_1 = require("./../app.service");
var ParametersViewComponent = (function () {
    // parametersSearch:string[];
    // slides: Slide[];
    // @Input() parameters:Parameters;
    function ParametersViewComponent(router, parameterService, appService) {
        this.router = router;
        this.parameterService = parameterService;
        this.appService = appService;
        this.ifSearch = false;
        this.parametersAdd = [];
        this.ifSuccess = false;
    }
    ParametersViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.parameter = new Parameter();
        // console.debug("init CampaignCardComponent campaignId:" );
        this.parametersSearch = [];
        // this.parameter = new Parameter();
        this.parameterService.getAllParameters().then(function (datas) {
            //  this.setSlides(datas);
            datas.forEach(function (data) {
                _this.parameters.push(data);
            });
            // console.log(this.parameters);
        })
            .catch(function (error) {
            console.error(error);
            //  this._appService.modalError.open("Failed to get campaigns ",error);
        });
        //  this.parameters = this.parametersSearch;
        //  this.setSlides(this.parametersSearch);
    };
    // details()
    // {
    //   this.router.navigate(['/campaign', this.campaign.id] );
    // }
    ParametersViewComponent.prototype.search = function (key) {
        var _this = this;
        this.ifSearch = true;
        this.parametersSearch = [];
        if (key && (key.indexOf(".yml") > 0)) {
            key = key.slice(0, key.indexOf('.yml'));
        }
        if (key && (key.indexOf(".json") > 0)) {
            key = key.slice(0, key.indexOf('.json'));
        }
        if (key && (key.indexOf(".properties") > 0)) {
            key = key.slice(0, key.indexOf('.properties'));
        }
        console.debug(key);
        this.parameterService.getParameters(key).then(function (datas) {
            // console.log(datas);
            datas.forEach(function (data) {
                _this.parametersSearch.push(data);
            });
        }).catch(function (error) {
            console.error(error);
        });
        this.ifSearch = false;
    };
    ParametersViewComponent.prototype.redirectToEditParameter = function (key) {
        // let baseHref:string = "https://github.com/ConfigurationCenterInCloud/CentralConfig/edit/master/config-repo/";
        var baseHref = "https://github.com/ConfigurationCenterInCloud/CentralConfig/tree/master/config-repo/";
        key = key.trim();
        // window.open()
        if (key) {
            if (key.indexOf(".yml") > 0) {
                key = key.slice(0, key.indexOf('.yml'));
            }
            else if (key.indexOf(".json") > 0) {
                key = key.slice(0, key.indexOf('.json'));
            }
            else if (key.indexOf(".properties") > 0) {
                key = key.slice(0, key.indexOf('.properties'));
            }
            window.open(baseHref + key + ".yml");
        }
        else {
            window.location.href = baseHref;
        }
    };
    ParametersViewComponent.prototype.addParameter = function () {
        this.parametersAdd.push(new parameter_1.Parameter());
    };
    ParametersViewComponent.prototype.removeParameter = function (parameter) {
        var index = this.parametersAdd.indexOf(parameter);
        this.parametersAdd.splice(index, 1);
    };
    ParametersViewComponent.prototype.add = function (parameter) {
        this.parameters.push(parameter);
        this.parametersAdd = [];
    };
    ParametersViewComponent.prototype.delete = function (parameter) {
        var index = this.parameters.indexOf(parameter);
        this.parameters.splice(index, 1);
        // this.parameterService.delete(parameter)
        //  .then(parameter => {
        //    this.paramter=campaign;
        //    this.appService.modalConfirm.close();})
        //    .catch(error => {
        //      this.appService.modalConfirm.close();
        //       this.appService.modalError.open("Failed to pause " +this.campaign.name,error);
        //    })
        this.appService.modalConfirm.close();
    };
    ParametersViewComponent.prototype.confirmDelete = function (parameter) {
        var _this = this;
        console.debug(parameter.key);
        event.stopPropagation();
        this.appService.modalConfirm.confirm("Delete", parameter.key, "Are you sure you want to <span class='action'>delete</span> the parameter?", function () { return _this.delete(parameter); });
    };
    ParametersViewComponent.prototype.edit = function (parameter) {
        // this.parameter = new Parameter();
        parameter.ifEdit = true;
        this.parameterBeforeEdit = parameter;
        // this.parameter = parameter;
    };
    ParametersViewComponent.prototype.undo = function (paramter) {
        paramter.ifEdit = false;
    };
    ParametersViewComponent.prototype.update = function (parameter) {
        var index = this.parameters.indexOf(this.parameterBeforeEdit);
        this.parameters.splice(index, 1);
        this.parameters.push(parameter);
        parameter.ifEdit = false;
    };
    ParametersViewComponent.prototype.refresh = function (key) {
        var _this = this;
        // this.refreshing = true;
        this.parameterService.refresh(key);
        // console.log("testtest");
        this.ifSuccess = true;
        setTimeout(function () { return _this.ifSuccess = false; }, 1000);
    };
    return ParametersViewComponent;
}());
ParametersViewComponent = __decorate([
    core_1.Component({
        selector: 'parameters-view',
        templateUrl: 'app/parameters/parameters-view.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        parameter_service_1.ParameterService,
        app_service_1.AppService])
], ParametersViewComponent);
exports.ParametersViewComponent = ParametersViewComponent;
//# sourceMappingURL=parameters-view.component.js.map