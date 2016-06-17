"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var appstart_component_1 = require('./appstart/appstart.component');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(appstart_component_1.AppStart, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
// test  
//# sourceMappingURL=main.js.map