"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.BestTimeService = void 0;
var common_1 = require("@nestjs/common");
var axios = require('axios');
var BestTimeService = /** @class */ (function () {
    function BestTimeService(httpService) {
        this.httpService = httpService;
    }
    BestTimeService.prototype.getBusyness = function (address, name) {
        return __awaiter(this, void 0, void 0, function () {
            var privateKey, publicKey, forecastURL, finalData, busynessData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        /*console.log('whats poppin');
                        let privateKey = "pri_7f33e89b0c0244e7819af6b573f24a28";
                        let publicKey = "pub_aceb9d3e7f0e4d57962091f1d3dabf70";
                        let forecastURL = `https://besttime.app/api/v1/forecasts?api_key_private=${privateKey}&venue_name=${name}&venue_address=${address}`;
                
                        console.log(forecastURL);
                        const busynessData = await this.httpService.post(forecastURL).toPromise();
                        console.log('after first call')
                        let newData = busynessData.data;
                        console.log(newData);
                        
                        let venueId = newData.venue_info.venue_id;
                        let nowForecast = `https://besttime.app/api/v1/forecasts/now?api_key_public=${publicKey}&venue_id=${venueId}`;
                        console.log(nowForecast);
                        const nowData = await this.httpService.get(nowForecast).toPromise();
                        //console.log(nowData.data);
                
                        return { weekAnalysis: newData, nowStuff: nowData.data };*/
                        console.log('whats poppin');
                        privateKey = "pri_72030dacdcf14a388546af143df85a67";
                        publicKey = "pub_6ee611f72a0a4b2ab5fbd0992780fff6";
                        forecastURL = "https://besttime.app/api/v1/forecasts?api_key_private=" + privateKey + "&venue_name=" + name + "&venue_address=" + address;
                        finalData = {};
                        return [4 /*yield*/, this.httpService.post(forecastURL).toPromise()
                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var newData, venueId, nowForecast, nowData;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            newData = data.data;
                                            console.log(newData);
                                            venueId = newData.venue_info.venue_id;
                                            nowForecast = "https://besttime.app/api/v1/forecasts/now?api_key_public=" + publicKey + "&venue_id=" + venueId;
                                            //console.log(nowForecast);
                                            console.log("NOWFORECAST: " + nowForecast);
                                            return [4 /*yield*/, this.httpService.get(nowForecast).toPromise()
                                                    .then(function (data2) {
                                                    console.log('both apis work');
                                                    console.log(newData);
                                                    console.log("NOWDATA: " + JSON.stringify(data2.data.analysis.hour_analysis));
                                                    //return { weekAnalysis: newData, nowStuff: data2.data.analysis.hour_analysis };
                                                    //return typeof newData.data.analysis.hour_analysis
                                                    //return { nowData: data2.data.analysis.hour_analysis };
                                                    //finalData = data2.data.analysis.hour_analysis;
                                                    var quietLoudHours = newData.analysis.map(function (day) { return ({
                                                        dayInfo: day.day_info.day_int,
                                                        quietHours: day.quiet_hours,
                                                        busyHours: day.busy_hours
                                                    }); });
                                                    console.log("ARRAYTESTS: " + JSON.stringify(quietLoudHours));
                                                    var nowdata = data2.data.analysis.hour_analysis;
                                                    console.log("INDEX: " + JSON.stringify(data2.data));
                                                    var oneQuietLoudHour = quietLoudHours[data2.data.day_int];
                                                    console.log("TEST QUIET: " + oneQuietLoudHour);
                                                    finalData = { weekAnalysis: quietLoudHours, nowStuff: data2.data.analysis.hour_analysis };
                                                    //this.forecastData = data2.data.analysis.hour_analysis
                                                    //finalData = data2.data.analysis.hour_analysis;
                                                    //finalData = { weekAnalysis: oneQuietLoudHour, nowData: nowdata}
                                                })["catch"](function (error2) {
                                                    console.log("SECONDAPI" + JSON.stringify(error2));
                                                    return {};
                                                })];
                                        case 1:
                                            nowData = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })["catch"](function (error) {
                                //console.log(error);
                                return {};
                            })];
                    case 1:
                        busynessData = _a.sent();
                        return [2 /*return*/, finalData];
                }
            });
        });
    };
    BestTimeService = __decorate([
        common_1.Injectable()
    ], BestTimeService);
    return BestTimeService;
}());
exports.BestTimeService = BestTimeService;
