import { Test, TestingModule } from '@nestjs/testing';
import { FirstNestAppController } from './first-nest-app.controller';

describe('FirstNestAppController', () => {
  let controller: FirstNestAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirstNestAppController],
    }).compile();

    controller = module.get<FirstNestAppController>(FirstNestAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
