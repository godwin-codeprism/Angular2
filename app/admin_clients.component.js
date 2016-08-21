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
var ng2_uploader_1 = require('ng2-uploader');
require('rxjs/add/operator/map');
var AdminClientsComponent = (function () {
    function AdminClientsComponent(http) {
        this.http = http;
        this.options = {
            url: './app/endpoints/uploadclient.php'
        };
    }
    AdminClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getClient().subscribe(function (res) {
            _this.clients = res;
        });
    };
    AdminClientsComponent.prototype.handleUpload = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    };
    AdminClientsComponent.prototype.getClient = function () {
        return this.http.get('./data/clients/clients.json').map(function (res) { return res.json(); });
    };
    AdminClientsComponent.prototype.addClient = function () {
        var _this = this;
        var data = {
            name: this.name,
            logo: './data/clients/images/' + this.uploadFile.generatedName
        };
        this.clients.push(data);
        this.http.post('./app/endpoints/postclients.php', this.clients).subscribe(function (res) {
            _this.name = "";
        });
    };
    AdminClientsComponent = __decorate([
        core_1.Component({
            templateUrl: './app/views/admin/admin_clients.component.html',
            styleUrls: ['./app/css/admin/admin_events.css'],
            directives: [ng2_uploader_1.UPLOAD_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AdminClientsComponent);
    return AdminClientsComponent;
}());
exports.AdminClientsComponent = AdminClientsComponent;
