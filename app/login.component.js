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
var http_1 = require('@angular/http');
var LoginComponent = (function () {
    function LoginComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = localStorage.getItem('qlstoken');
        if (this.token !== undefined && this.token !== '' && this.token !== null) {
            var currentToken = { token: this.token };
            this.http.post('./app/endpoints/checktoken.php', currentToken).subscribe(function (res) {
                if (res.json() === 'authorized') {
                    _this.router.navigate(['/dashboard']);
                    console.log('Welcome');
                }
                else {
                    console.log('You are a Liar');
                }
            });
        }
        else {
            console.log('please login');
        }
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var data = {
            username: this.username,
            password: this.password
        };
        this.http.post('./app/endpoints/login.php', data).subscribe(function (res) {
            if (res.json() !== "ERROR") {
                localStorage.setItem('qlstoken', res.json());
                _this.router.navigate(['/dashboard']);
            }
            else {
                console.log('Incorrect username or password');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: './app/views/admin/login.component.html',
            styleUrls: ['./app/css/admin/login.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
