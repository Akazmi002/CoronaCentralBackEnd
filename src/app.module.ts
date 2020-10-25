import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UIModule } from './UI_API/ui.module';

@Module({
  imports: [UIModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
