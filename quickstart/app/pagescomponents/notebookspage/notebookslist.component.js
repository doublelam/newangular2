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
var switch_service_1 = require('../../globalservice/switch.service');
var notebooksListComponent = (function () {
    function notebooksListComponent(swichService) {
        this.swichService = swichService;
        this.onOff = this.swichService.switchOnOff();
    }
    notebooksListComponent.prototype.ngOnInit = function () {
        this.ifMoreHoverd = false;
    };
    notebooksListComponent.prototype.iconMouseIn = function () {
        this.ifMoreHoverd = this.onOff();
        console.log(this.ifMoreHoverd);
    };
    notebooksListComponent.prototype.iconMouseOut = function () {
        this.ifMoreHoverd = this.onOff();
        console.log(this.ifMoreHoverd);
    };
    notebooksListComponent.prototype.deleteNotebook = function () {
        if (confirm('Are you sure to delete it?')) {
            this.nklinfo.items.splice(this.nklinfo.index, 1);
        }
        else {
            console.log('do not delete it');
        }
    };
    notebooksListComponent = __decorate([
        core_1.Component({
            selector: 'notebooks-list',
            templateUrl: '../../../templates/pagestemplate/notebookslist.tpl.html',
            providers: [switch_service_1.SwitchService],
            inputs: ['nklinfo']
        }), 
        __metadata('design:paramtypes', [switch_service_1.SwitchService])
    ], notebooksListComponent);
    return notebooksListComponent;
}());
exports.notebooksListComponent = notebooksListComponent;
//# sourceMappingURL=notebookslist.component.js.map