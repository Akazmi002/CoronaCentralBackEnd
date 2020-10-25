import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/common';
import { ApiController } from './api.controller';
import { GooglePlaceService } from './googlePlace.service';
import { BestTimeService } from './bestTime.service';

@Module({
    imports: [HttpModule],
    controllers: [ApiController],
    providers: [GooglePlaceService, BestTimeService],
})
export class UIModule { }