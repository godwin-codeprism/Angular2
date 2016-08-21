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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var admin_routing_1 = require('./admin.routing');
var admin_component_1 = require('./admin.component');
var login_component_1 = require('./login.component');
var dashboard_component_1 = require('./dashboard.component');
var admin_events_component_1 = require('./admin_events.component');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                admin_routing_1.adminRouting,
                forms_1.FormsModule,
            ],
            declarations: [
                admin_component_1.AdminComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                admin_events_component_1.AdminEventsComponent
            ],
            providers: [
                http_1.HTTP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
