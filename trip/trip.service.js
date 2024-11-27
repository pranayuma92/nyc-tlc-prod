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
exports.TripService = void 0;
const common_1 = require("@nestjs/common");
let TripService = class TripService {
    constructor(tripModel) {
        this.tripModel = tripModel;
    }
    async findAll(query) {
        const { dropOffTime, pickUpTime, fareAmount, distance, paymentType, sort, limit, offset } = query;
        return await this.tripModel
            .query()
            .modify((q) => {
            if (dropOffTime) {
                q.where('dropoff_datetime', 'like', `%${dropOffTime}%`);
            }
            if (pickUpTime) {
                q.andWhere('pickup_datetime', 'like', `%${pickUpTime}%`);
            }
            if (fareAmount) {
                q.andWhere('fare_amount', '=', fareAmount);
            }
            if (distance) {
                q.andWhere('trip_distance', '=', distance);
            }
            if (paymentType) {
                q.andWhere('payment_type', '=', paymentType);
            }
        })
            .orderBy('pickup_datetime', sort)
            .limit(limit)
            .offset(offset);
    }
};
exports.TripService = TripService;
exports.TripService = TripService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TripModel')),
    __metadata("design:paramtypes", [Object])
], TripService);
//# sourceMappingURL=trip.service.js.map