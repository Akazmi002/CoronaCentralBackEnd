"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UIModule = void 0;
var common_1 = require("@nestjs/common");
var common_2 = require("@nestjs/common");
var api_controller_1 = require("./api.controller");
var googlePlace_service_1 = require("./googlePlace.service");
var bestTime_service_1 = require("./bestTime.service");
var UIModule = /** @class */ (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        common_1.Module({
            imports: [common_2.HttpModule],
            controllers: [api_controller_1.ApiController],
            providers: [googlePlace_service_1.GooglePlaceService, bestTime_service_1.BestTimeService]
        })
    ], UIModule);
    return UIModule;
}());
exports.UIModule = UIModule;
