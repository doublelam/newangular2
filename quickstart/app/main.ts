import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {AppStart} from './appstart/appstart.component';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(AppStart,[ROUTER_PROVIDERS,HTTP_PROVIDERS]);
// test 