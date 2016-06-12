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
var NotebooksPageComponent = (function () {
    function NotebooksPageComponent() {
        this.items = ['the first name', 'the second name', 'the third name'];
    }
    NotebooksPageComponent = __decorate([
        core_1.Component({
            template: "\n\t\t<ul class=\"notebooks-container\">\n\t\t\t<notebooks-list *ngFor=\"let item of items;let index=index\" [nklinfo]=\"{items:items,index:index}\"></notebooks-list>\n\t\t</ul>\n\t",
            directives: [notebookslist_component_1.notebooksListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NotebooksPageComponent);
    return NotebooksPageComponent;
}());
exports.NotebooksPageComponent = NotebooksPageComponent;
//# sourceMappingURL=notebooks.component.js.map