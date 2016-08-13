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
var Courses = (function () {
    function Courses(http) {
        this.http = http;
        this.query = '';
        this.dataUrl = './data/courses.json';
    }
    Courses.prototype.ngOnInit = function () {
        var _this = this;
        this.getData().subscribe(function (courseData) {
            _this.courses = courseData;
        });
    };
    Courses.prototype.getData = function () {
        return this.http.get(this.dataUrl)
            .map(function (res) { return res.json(); });
    };
    Courses.prototype.onSearch = function (course) {
        var _this = this;
        this.getData().subscribe(function (courseData) {
            _this.courses = courseData.filter(function (value, index, array) {
                if (value.title.toLowerCase().indexOf(course.toLowerCase()) !== -1) {
                    return true;
                }
                else {
                    return false;
                }
            });
        });
    };
    Courses = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'g-courses',
            templateUrl: './app/views/courses.component.html',
            styleUrls: ['./app/css/courses.css'],
        }),
        __metadata('design:paramtypes', [http_1.Http])
    ], Courses);
    return Courses;
}());
exports.Courses = Courses;
