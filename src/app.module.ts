import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstNestAppController } from './first-nest-app/first-nest-app.controller';
import { NoTestFileController } from './no-test-file/no-test-file.controller';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';

@Module({
  imports: [],
  controllers: [AppController, FirstNestAppController, NoTestFileController, CoffeesController],
  providers: [AppService, CoffeesService],
})
export class AppModule {}
