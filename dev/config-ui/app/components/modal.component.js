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
var ModalComponent = (function () {
    function ModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
        this.processing = false;
    }
    ModalComponent.prototype.confirm = function (action, name, description, onConfirm) {
        this.processing = false;
        this.action = action;
        this.name = name;
        this.description = description;
        this.onConfirm = onConfirm;
        this.show();
    };
    ModalComponent.prototype.close = function () {
        this.hide();
    };
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; });
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalComponent.prototype.doConfirm = function () {
        this.processing = true;
        this.onConfirm();
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-confirm',
            template: "\n  <div class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n       [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header alert alert-info fade in\">\n          <button type=\"button\" class=\"close\" (click)=\"hide()\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t\t      <h4 class=\"modal-title\"><span class=\"action\">{{action}}</span>-<strong>{{name}}</strong></h4>\n        </div>\n        <div class=\"modal-body\" [innerHTML]=\"description\">\n        </div>\n        <div class=\"modal-footer\">\n         \t<button type=\"button\" class=\"btn btn-default\" (click)=\"hide()\">Cancel</button>\n\t\t\t    <button type=\"button\" [disabled]=\"processing\" class=\"btn btn-primary\" (click)=\"doConfirm()\"><span>Confirm</span>\n    <i *ngIf=\"processing\" class=\"fa fa-spinner fa-spin\" ng-show=\"saving\"></i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"visible\" class=\"modal-backdrop fade\" [ngClass]=\"{'in': visibleAnimate}\" (click)=\"hide()\"></div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map