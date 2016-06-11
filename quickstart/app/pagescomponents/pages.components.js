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
var RouterTemplate = (function () {
    function RouterTemplate() {
    }
    RouterTemplate = __decorate([
        core_1.Component({
            selector: 'pages-component',
            template: "\n\t\t<section class=\"main-body\">\n\t\t\t<article class=\"content-main\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</article>\n\t\t\t<aside class=\"content-aside\">\n\t\t\t\tsome aside content\n\t\t\t</aside>\n\t\t</section>\n\t\t\n\t",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], RouterTemplate);
    return RouterTemplate;
}());
exports.RouterTemplate = RouterTemplate;
//# sourceMappingURL=pages.components.js.map