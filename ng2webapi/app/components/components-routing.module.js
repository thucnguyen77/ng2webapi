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
var buttons_component_1 = require('./buttons.component');
var cards_component_1 = require('./cards.component');
var forms_component_1 = require('./forms.component');
var social_buttons_component_1 = require('./social-buttons.component');
var switches_component_1 = require('./switches.component');
var tables_component_1 = require('./tables.component');
var routes = [
    {
        path: '',
        data: {
            title: 'Components'
        },
        children: [
            {
                path: 'buttons',
                component: buttons_component_1.ButtonsComponent,
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'cards',
                component: cards_component_1.CardsComponent,
                data: {
                    title: 'Cards'
                }
            },
            {
                path: 'forms',
                component: forms_component_1.FormsComponent,
                data: {
                    title: 'Forms'
                }
            },
            {
                path: 'social-buttons',
                component: social_buttons_component_1.SocialButtonsComponent,
                data: {
                    title: 'Social buttons'
                }
            },
            {
                path: 'switches',
                component: switches_component_1.SwitchesComponent,
                data: {
                    title: 'Switches'
                }
            },
            {
                path: 'tables',
                component: tables_component_1.TablesComponent,
                data: {
                    title: 'Tables'
                }
            }
        ]
    }
];
var ComponentsRoutingModule = (function () {
    function ComponentsRoutingModule() {
    }
    ComponentsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentsRoutingModule);
    return ComponentsRoutingModule;
}());
exports.ComponentsRoutingModule = ComponentsRoutingModule;
//# sourceMappingURL=components-routing.module.js.map