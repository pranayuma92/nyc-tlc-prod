import { ModelClass } from 'objection';
import { TripModel } from '../db/models/trip.model';
import { QueryTrip } from './dto/query-trip.dto';
export declare class TripService {
    private tripModel;
    constructor(tripModel: ModelClass<TripModel>);
    findAll(query: QueryTrip): Promise<TripModel[]>;
}
