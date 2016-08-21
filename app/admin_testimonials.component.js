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
var ng2_uploader_1 = require('ng2-uploader');
var AdminTestimonialsComponent = (function () {
    function AdminTestimonialsComponent() {
        this.options = {
            url: './app/endpoints/upload.php'
        };
    }
    AdminTestimonialsComponent.prototype.ngOnInit = function () { };
    AdminTestimonialsComponent.prototype.handleUpload = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    };
    AdminTestimonialsComponent = __decorate([
        core_1.Component({
            templateUrl: './app/views/admin/admin_testimonials.component.html',
            directives: [ng2_uploader_1.UPLOAD_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminTestimonialsComponent);
    return AdminTestimonialsComponent;
}());
exports.AdminTestimonialsComponent = AdminTestimonialsComponent;
