import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { TripModel } from '../db/models/trip.model';
import { QueryTrip } from './dto/query-trip.dto';

@Injectable()
export class TripService {
  constructor(
    @Inject('TripModel') private tripModel: ModelClass<TripModel>
  ) {}

  async findAll(query: QueryTrip) {
    const {
      dropOffTime, 
      pickUpTime,
      fareAmount,
      distance,
      paymentType,
      sort,
      limit,
      offset
    } = query;

    return await this.tripModel
      .query()
      .modify((q) => {
        if(dropOffTime) {
          q.where('dropoff_datetime', 'like', `%${dropOffTime}%`);
        }
        if(pickUpTime) {
          q.andWhere('pickup_datetime', 'like', `%${pickUpTime}%`);
        }
        if(fareAmount) {
          q.andWhere('fare_amount', '=', fareAmount);
        }
        if(distance) {
          q.andWhere('trip_distance', '=', distance);
        }
        if(paymentType){
          q.andWhere('payment_type', '=', paymentType);
        }
      })
      .orderBy('pickup_datetime', sort)
      .limit(limit)
      .offset(offset);
  }
}
