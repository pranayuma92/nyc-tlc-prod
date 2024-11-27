import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  HttpCode
} from '@nestjs/common';
import { TripService } from './trip.service';
import { FormatResponseInterceptor } from '../common/interceptors/format-response.interceptor';
import { QueryTrip } from './dto/query-trip.dto';

@Controller('trip')
@UseInterceptors(FormatResponseInterceptor)
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post()
  @HttpCode(200)
  async findAll(@Body() query: QueryTrip) {
    return await this.tripService.findAll(query);
  }
}
