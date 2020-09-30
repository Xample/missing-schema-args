import { Test2, Test2ingModule } from '@nestjs/test2ing';
import { Test2Resolver } from './test2.resolver';

describe('Test2Resolver', () => {
  let resolver: Test2Resolver;

  beforeEach(async () => {
    const module: Test2ingModule = await Test2.createTest2ingModule({
      providers: [Test2Resolver],
    }).compile();

    resolver = module.get<Test2Resolver>(Test2Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
