import { OrderByDirection } from 'objection';

export class QueryTrip {
	dropOffTime?: string;
  pickUpTime?: string;
  fareAmount?: number;
  distance?: number;
  paymentType?: string;
  sort?: OrderByDirection;
  limit?: number;
  offset?: number;
}