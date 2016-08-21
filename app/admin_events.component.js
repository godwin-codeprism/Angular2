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
require('rxjs/add/operator/map');
var AdminEventsComponent = (function () {
    function AdminEventsComponent(http) {
        this.http = http;
    }
    AdminEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEventsList().subscribe(function (res) {
            _this.events = res;
        });
    };
    AdminEventsComponent.prototype.getEventsList = function () {
        return this.http.get('./data/events.json').map(function (res) { return res.json(); });
    };
    AdminEventsComponent.prototype.addEvent = function () {
        var _this = this;
        var data = {
            training: this.training,
            date: this.date,
            location: this.location,
            link: this.link
        };
        this.events.push(data);
        this.http.post('./app/endpoints/postevents.php', this.events).subscribe(function (res) {
            _this.training = '';
            _this.date = '';
            _this.location = '';
            _this.link = '';
        });
    };
    AdminEventsComponent = __decorate([
        core_1.Component({
            templateUrl: './app/views/admin/admin_events.component.html',
            styleUrls: ['./app/css/admin/admin_events.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AdminEventsComponent);
    return AdminEventsComponent;
}());
exports.AdminEventsComponent = AdminEventsComponent;
