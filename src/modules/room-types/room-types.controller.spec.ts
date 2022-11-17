import { Test, TestingModule } from '@nestjs/testing';
import { RoomsTypesController } from './room-types.controller';
import { RoomsTypesService } from './rooms-types.service';

describe('RoomsTypesController', () => {
  let controller: RoomsTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomsTypesController],
      providers: [RoomsTypesService],
    }).compile();

    controller = module.get<RoomsTypesController>(RoomsTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
