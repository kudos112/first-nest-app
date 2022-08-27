import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstNestAppController } from './first-nest-app/first-nest-app.controller';
import { NoTestFileController } from './no-test-file/no-test-file.controller';

@Module({
  imports: [],
  controllers: [AppController, FirstNestAppController, NoTestFileController],
  providers: [AppService],
})
export class AppModule {}
