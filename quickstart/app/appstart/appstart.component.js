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
var notebooks_component_1 = require('../pagescomponents/notebooks.component');
var notes_component_1 = require('../pagescomponents/notes.component');
var nav_component_1 = require('../homecomponents/nav.component');
var pages_components_1 = require('../pagescomponents/pages.components');
var AppStart = (function () {
    function AppStart() {
    }
    AppStart = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<nav-component></nav-component>\n\t\t<pages-component></pages-component>\n\t",
            directives: [nav_component_1.NavigationComponent, pages_components_1.RouterTemplate]
        }),
        router_1.Routes([
            {
                path: '/notebooks',
                component: notebooks_component_1.NotebooksPageComponent
            },
            {
                path: '/notes',
                component: notes_component_1.NotesPageComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppStart);
    return AppStart;
}());
exports.AppStart = AppStart;
//# sourceMappingURL=appstart.component.js.map