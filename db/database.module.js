"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
const objection_1 = require("objection");
const trip_model_1 = require("./models/trip.model");
const models = [trip_model_1.TripModel];
const modelProviders = models.map((model) => {
    return {
        provide: model.name,
        useValue: model,
    };
});
const providers = [
    ...modelProviders,
    {
        provide: 'KnexConnection',
        useFactory: async () => {
            const knex = (0, knex_1.default)({
                client: 'pg',
                connection: {
                    user: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT),
                    database: process.env.DB_NAME,
                    ssl: {
                        rejectUnauthorized: false,
                        ca: process.env.DB_CERT
                    },
                },
                debug: process.env.KNEX_DEBUG === 'true',
                ...(0, objection_1.knexSnakeCaseMappers)(),
            });
            objection_1.Model.knex(knex);
            return knex;
        },
    },
];
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [...providers],
        exports: [...providers],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map