import { Model } from 'objection';

export class TripModel extends Model {
	static tableName = 'trip';
	vendor_id: string;
	pickup_datetime: Date;
	dropoff_datetime: Date;
	passenger_count: Number;
	trip_distance: Number;
	pickup_longitude: Number;
	pickup_latitude: Number;
	store_and_fwd_flag: string;
	dropoff_longitude: Number;
	dropoff_latitude: Number;
	payment_type: string;
	fare_amount: Number;
	mta_tax: Number;
	tip_amount: Number;
	tolls_amount: Number;
	total_amount: Number;
	imp_surcharge: Number;
	extra: string;
	rate_code: Number;
}