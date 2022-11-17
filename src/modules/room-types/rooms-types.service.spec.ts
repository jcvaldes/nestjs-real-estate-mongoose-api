import { Test, TestingModule } from '@nestjs/testing';
import { RoomsTypesService } from './rooms-types.service';

describe('RoomsTypesService', () => {
  let service: RoomsTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomsTypesService],
    }).compile();

    service = module.get<RoomsTypesService>(RoomsTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
