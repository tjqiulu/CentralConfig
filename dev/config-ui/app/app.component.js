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
var app_service_1 = require('./app.service');
var modal_component_1 = require('./components/modal.component');
var modalError_component_1 = require('./components/modalError.component');
var parameter_service_1 = require('./parameters/parameter.service');
var http_1 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent(router, appService, http) {
        var _this = this;
        this.router = router;
        this.appService = appService;
        this.http = http;
        this.didScroll = false;
        this.appService.event.subscribe(function (data) {
            _this.pageInfo = data;
            console.log(data);
        });
        this.router.events
            .subscribe(this.routeChanged.bind(this));
    }
    AppComponent.prototype.ngOnInit = function () {
        this.appService.modalConfirm = this.modalConfirm;
        this.appService.modalError = this.modalError;
        //window.addEventListener('scroll', (evt) => { this.didScroll = true; });
        // setInterval(() => {
        //     if (this.didScroll) {
        //         this.hasScrolled();
        //         this.didScroll = false;
        //     }
        // }, 250);
    };
    AppComponent.prototype.routeChanged = function (event) {
        if (event instanceof router_1.NavigationEnd) {
            console.log(this.router.routerState.snapshot);
        }
    };
    AppComponent.prototype.hasScrolled = function () {
        console.log("hasScrolled");
        var st = window.pageYOffset;
        var navbarHeight = this.menu.nativeElement.height;
        console.log(navbarHeight);
        // Make sure they scroll more than delta
        // if(Math.abs(this.lastScrollTop - st) <= 5)
        //     return;
        // // If they scrolled down and are past the navbar, add class .nav-up.
        // // This is necessary so you never see what is "behind" the navbar.
        // if (st > this.lastScrollTop && st > navbarHeight){
        //     this.navBarVisible=false;
        //     $('.navbar').removeClass('nav-down').addClass('nav-up');
        // } else {
        //     // Scroll Up
        //     if(st + window.outerHeight< $(document).height()) {
        //         this.navBarVisible=true;
        //     }
        // }
        // lastScrollTop = st;
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.http
            .get('logout.jsp')
            .toPromise()
            .then(function (response) {
            _this.router.navigate(['/login']);
        });
    };
    __decorate([
        core_1.ViewChild('menu'), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "menu", void 0);
    __decorate([
        core_1.ViewChild(modal_component_1.ModalComponent), 
        __metadata('design:type', modal_component_1.ModalComponent)
    ], AppComponent.prototype, "modalConfirm", void 0);
    __decorate([
        core_1.ViewChild(modalError_component_1.ModalErrorComponent), 
        __metadata('design:type', modalError_component_1.ModalErrorComponent)
    ], AppComponent.prototype, "modalError", void 0);
    AppComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/app.component.html',
            selector: 'my-app',
            providers: [parameter_service_1.ParameterService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.AppService, http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map