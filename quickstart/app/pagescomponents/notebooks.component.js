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
var notebookslist_component_1 = require('./notebookspage/notebookslist.component');
var switch_service_1 = require('../globalservice/switch.service');
var notebooks_service_1 = require('../globalservice/notebookservice/notebooks.service');
var NotebooksPageComponent = (function () {
    function NotebooksPageComponent(switchOnOff, noteboosService) {
        this.switchOnOff = switchOnOff;
        this.noteboosService = noteboosService;
    }
    NotebooksPageComponent.prototype.ngOnInit = function () {
        this.ifClicked = false;
        this.onOff = this.switchOnOff.switchOnOff();
        this.testGet();
    };
    NotebooksPageComponent.prototype.testGet = function () {
        console.log(this.noteboosService.notebooksData);
        var thisIndex = this;
        setTimeout(function () {
            console.log(thisIndex.noteboosService.notebooksData);
        }, 2000);
    };
    NotebooksPageComponent.prototype.addNotebook = function (bookName) {
        this.noteboosService.notebooksData.notebooks.unshift({ name: bookName, notes: [{ title: 'for typing', content: 'for typing content' }] });
        this.addClick();
        console.log(this.noteboosService.notebooksData);
        return bookName;
    };
    NotebooksPageComponent.prototype.addClick = function () {
        this.ifClicked = this.onOff();
    };
    NotebooksPageComponent = __decorate([
        core_1.Component({
            template: "\n\t\t<div class=\"create-notebook\">\n\t\t\t<div class=\"add-icon-container\" *ngIf=\"!ifClicked\"><i class=\"fa fa-plus\" (click)=\"addClick()\"></i></div>\n\t\t\t<div class=\"add-content-area\" *ngIf=\"ifClicked\">\n\t\t\t\t<input type=\"text\" placeholder=\"Typing Notebook's Name...\" #notebookNameInput (keyup)=\"0\">\n\t\t\t\t<button class=\"main\" [disabled]=\"notebookNameInput.value===''\" (click)=\"addNotebook(notebookNameInput.value)\">Confirm</button><button (click)=\"addClick()\">Cancel</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<ul class=\"notebooks-container\">\n\t\t\t<notebooks-list *ngFor=\"let item of noteboosService.notebooksData.notebooks;let index=index\" [nklinfo]=\"{index:index}\"></notebooks-list>\n\t\t</ul>\n\t",
            directives: [notebookslist_component_1.notebooksListComponent],
            providers: [switch_service_1.SwitchService]
        }), 
        __metadata('design:paramtypes', [switch_service_1.SwitchService, notebooks_service_1.NotebooksService])
    ], NotebooksPageComponent);
    return NotebooksPageComponent;
}());
exports.NotebooksPageComponent = NotebooksPageComponent;
//# sourceMappingURL=notebooks.component.js.map