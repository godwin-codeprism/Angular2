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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var users_routing_1 = require('./users.routing');
var users_component_1 = require('./users.component');
var home_component_1 = require('./home.component');
var about_component_1 = require('./about.component');
var itil_foundation_component_1 = require('./itil_foundation.component');
var continual_service_component_1 = require('./continual_service.component');
var service_operation_component_1 = require('./service_operation.component');
var service_transition_component_1 = require('./service_transition.component');
var service_design_component_1 = require('./service_design.component');
var service_strategy_component_1 = require('./service_strategy.component');
var soa_component_1 = require('./soa.component');
var rcv_component_1 = require('./rcv.component');
var ppo_component_1 = require('./ppo.component');
var osa_component_1 = require('./osa.component');
var malc_component_1 = require('./malc.component');
var capm_component_1 = require('./capm.component');
var pmp_component_1 = require('./pmp.component');
var acp_component_1 = require('./acp.component');
var p2f_component_1 = require('./p2f.component');
var p2p_component_1 = require('./p2p.component');
var p2a_component_1 = require('./p2a.component');
var scrum_component_1 = require('./scrum.component');
var msp_component_1 = require('./msp.component');
var green_belt_component_1 = require('./green_belt.component');
var black_belt_component_1 = require('./black_belt.component');
var cobit_component_1 = require('./cobit.component');
var togaf_component_1 = require('./togaf.component');
var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                users_routing_1.usersRouting
            ],
            declarations: [
                users_component_1.UsersComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                itil_foundation_component_1.ItitlFoundationComponent,
                continual_service_component_1.ContinualServiceComponent,
                service_operation_component_1.ServiceOperationComponenet,
                service_transition_component_1.ServiceTansitionComponent,
                service_design_component_1.ServiceDesign,
                service_strategy_component_1.ServiceStrategyComponent,
                soa_component_1.SOAComponent,
                rcv_component_1.RCVComponent,
                ppo_component_1.PPOComponent,
                osa_component_1.OSAComponent,
                malc_component_1.MALCComponent,
                capm_component_1.CAPMComponent,
                pmp_component_1.PMPComponent,
                acp_component_1.ACPComponent,
                p2f_component_1.P2FComponent,
                p2p_component_1.P2PComponent,
                p2a_component_1.P2AComponent,
                scrum_component_1.ScrumComponent,
                msp_component_1.MSPComponent,
                green_belt_component_1.GreenBeltComponent,
                black_belt_component_1.BlackBeltComponent,
                cobit_component_1.CobitComponent,
                togaf_component_1.TOGAFComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
