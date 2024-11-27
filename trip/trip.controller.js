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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripController = void 0;
const common_1 = require("@nestjs/common");
const trip_service_1 = require("./trip.service");
const format_response_interceptor_1 = require("../common/interceptors/format-response.interceptor");
const query_trip_dto_1 = require("./dto/query-trip.dto");
let TripController = class TripController {
    constructor(tripService) {
        this.tripService = tripService;
    }
    async findAll(query) {
        return await this.tripService.findAll(query);
    }
};
exports.TripController = TripController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_trip_dto_1.QueryTrip]),
    __metadata("design:returntype", Promise)
], TripController.prototype, "findAll", null);
exports.TripController = TripController = __decorate([
    (0, common_1.Controller)('trip'),
    (0, common_1.UseInterceptors)(format_response_interceptor_1.FormatResponseInterceptor),
    __metadata("design:paramtypes", [trip_service_1.TripService])
], TripController);
//# sourceMappingURL=trip.controller.js.map