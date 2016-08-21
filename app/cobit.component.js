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
var CobitComponent = (function () {
    function CobitComponent() {
    }
    CobitComponent.prototype.ngOnInit = function () { };
    CobitComponent = __decorate([
        core_1.Component({
            templateUrl: './app/views/classroom_courses/cobit.component.html',
            styleUrls: ['./app/css/classroom_courses.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CobitComponent);
    return CobitComponent;
}());
exports.CobitComponent = CobitComponent;
