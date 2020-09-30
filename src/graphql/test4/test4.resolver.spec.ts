import { Test4, Test4ingModule } from '@nestjs/test4ing';
import { Test4Resolver } from './test4.resolver';

describe('Test4Resolver', () => {
  let resolver: Test4Resolver;

  beforeEach(async () => {
    const module: Test4ingModule = await Test4.createTest4ingModule({
      providers: [Test4Resolver],
    }).compile();

    resolver = module.get<Test4Resolver>(Test4Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
