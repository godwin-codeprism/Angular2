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
var http_1 = require('@angular/http');
var nav_component_1 = require('./nav.component');
var banner_component_1 = require('./banner.component');
var events_component_1 = require('./events.component');
var courses_component_1 = require('./courses.component');
var testimonies_component_1 = require('./testimonies.component');
var clients_component_1 = require('./clients.component');
var footer_component_1 = require('./footer.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'qls',
            templateUrl: './app/views/app.component.html',
            directives: [nav_component_1.Nav, banner_component_1.Banner, events_component_1.Events, courses_component_1.Courses, testimonies_component_1.Testimonies, clients_component_1.Clients, footer_component_1.Footer],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
