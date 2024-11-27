import { TripService } from './trip.service';
import { QueryTrip } from './dto/query-trip.dto';
export declare class TripController {
    private readonly tripService;
    constructor(tripService: TripService);
    findAll(query: QueryTrip): Promise<import("../db/models/trip.model").TripModel[]>;
}
