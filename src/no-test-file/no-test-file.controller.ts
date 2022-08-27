import { Controller, Get } from '@nestjs/common';

@Controller('no-test-file')
export class NoTestFileController {
  @Get()
  find() {
    return 'this is without test file';
  }
}
