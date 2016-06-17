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
var notebooks_service_1 = require('../../globalservice/notebookservice/notebooks.service');
var notebooksListComponent = (function () {
    function notebooksListComponent(swichService, notebooksService) {
        this.swichService = swichService;
        this.notebooksService = notebooksService;
    }
    notebooksListComponent.prototype.ngOnInit = function () {
        this.onOff = this.swichService.switchOnOff();
        this.newOnOff = this.swichService.switchOnOff();
        this.ifMoreHoverd = false;
        this.ifEditClick = false;
        this.renameInput = this.notebooksService.notebooksData.notebooks[this.nklinfo.index].name;
    };
    notebooksListComponent.prototype.iconMouseIn = function () {
        this.ifMoreHoverd = this.onOff();
    };
    notebooksListComponent.prototype.iconMouseOut = function () {
        this.ifMoreHoverd = this.onOff();
    };
    notebooksListComponent.prototype.deleteNotebook = function () {
        if (confirm('Are you sure to delete it?')) {
            this.notebooksService.notebooksData.notebooks.splice(this.nklinfo.index, 1);
        }
        else {
            console.log('do not delete it');
        }
    };
    notebooksListComponent.prototype.renameConfirm = function () {
        this.notebooksService.notebooksData.notebooks[this.nklinfo.index].name = this.renameInput;
        this.ifEditClick = this.newOnOff();
    };
    notebooksListComponent.prototype.renameCancle = function () {
        this.renameInput = this.notebooksService.notebooksData.notebooks[this.nklinfo.index].name;
        this.ifEditClick = this.newOnOff();
    };
    notebooksListComponent.prototype.editOnOff = function () {
        this.ifEditClick = this.newOnOff();
    };
    notebooksListComponent = __decorate([
        core_1.Component({
            selector: 'notebooks-list',
            templateUrl: '../../../templates/pagestemplate/notebookslist.tpl.html',
            providers: [switch_service_1.SwitchService],
            inputs: ['nklinfo']
        }), 
        __metadata('design:paramtypes', [switch_service_1.SwitchService, notebooks_service_1.NotebooksService])
    ], notebooksListComponent);
    return notebooksListComponent;
}());
exports.notebooksListComponent = notebooksListComponent;
//# sourceMappingURL=notebookslist.component.js.map