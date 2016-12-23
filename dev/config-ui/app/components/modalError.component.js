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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var ModalErrorComponent = (function () {
    function ModalErrorComponent(router, http) {
        this.router = router;
        this.http = http;
        this.visible = false;
        this.authenticationError = false;
        this.visibleAnimate = false;
        this.error = {};
    }
    ModalErrorComponent.prototype.open = function (title, error) {
        console.log("open");
        console.log(error);
        if (error == null) {
            return;
        }
        this.title = title;
        if (error.statusText) {
            this.error = { "title": "Connection error", "code": error.status, "reason": error.statusText };
        }
        else if (error.reason == "no authentication") {
            this.authenticationError = true;
            this.title = "Please login";
        }
        else {
            this.error = error;
        }
        this.show();
    };
    ModalErrorComponent.prototype.close = function () {
        this.hide();
    };
    ModalErrorComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; });
    };
    ModalErrorComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalErrorComponent.prototype.login = function (username, password) {
        var _this = this;
        var body = new http_1.URLSearchParams();
        body.set("j_username", username);
        body.set("j_password", password);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        console.error(body.toString());
        this.http
            .post('j_security_check', body.toString(), { headers: headers })
            .toPromise()
            .then(function (response) {
            console.error(response.status + "==================");
            if (response.status != 403) {
                _this.hide();
                location.reload();
            }
        });
    };
    ModalErrorComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-error',
            template: "\n  <div class=\"modal fade rounded\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n       [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\">\n\n      <div class=\"modal-content\" [ngStyle]=\"{'display': authenticationError ? 'none' : 'block'}\">\n        <div class=\"modal-header alert alert-danger fade in\">\n          <button type=\"button\" class=\"close\" (click)=\"hide()\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t\t      <h4 class=\"modal-title\"><span class=\"action\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> <b>Error</b></span>\n          \n          </h4>\n        </div>\n         <div class=\"modal-body\" [innerHTML]=\"title +'<br/> [Error code: '+error.code +'] ' + error.reason\">\n        </div>\n        <div class=\"modal-footer\">\n         \t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"hide()\">Close</button>\n\t\t\t  \n        </div>\n      </div>\n\n      <div class=\"modal-content\" [ngStyle]=\"{'display': authenticationError ? 'block' : 'none'}\">\n        <div class=\"modal-header alert alert-danger fade in\">\n\t\t      <h4 class=\"modal-title\"><span class=\"action glyphicon glyphicon-warning-sign\"> {{title}}</span></h4>\n        </div>\n         <div class=\"modal-body\">\n          <table>\n            <tr>\n                <td>Username: </td><td><input type=\"text\" #username/></td>\n            </tr>\n            <tr>\n                <td>Password: </td><td><input type=\"password\" #password /></td>\n            </tr>\n            </table>\n        </div>\n        <div class=\"modal-footer\">\n         \t<button type=\"button\" class=\"btn btn-default\" (click)=\"login(username.value, password.value)\">Login</button>\n\t\t\t  \n        </div>\n      </div>\n\n\n    </div>\n  </div>\n  <div *ngIf=\"visible\" class=\"modal-backdrop fade\" [ngClass]=\"{'in': visibleAnimate}\" (click)=\"hide()\"></div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], ModalErrorComponent);
    return ModalErrorComponent;
}());
exports.ModalErrorComponent = ModalErrorComponent;
//# sourceMappingURL=modalError.component.js.map