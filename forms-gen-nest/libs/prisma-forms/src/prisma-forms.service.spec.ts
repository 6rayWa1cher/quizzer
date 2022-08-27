import { Test, TestingModule } from '@nestjs/testing';
import { PrismaFormsService } from './prisma-forms.service';

describe('PrismaFormsService', () => {
  let service: PrismaFormsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaFormsService],
    }).compile();

    service = module.get<PrismaFormsService>(PrismaFormsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
