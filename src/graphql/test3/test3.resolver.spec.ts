import { Test3, Test3ingModule } from '@nestjs/test3ing';
import { Test3Resolver } from './test3.resolver';

describe('Test3Resolver', () => {
  let resolver: Test3Resolver;

  beforeEach(async () => {
    const module: Test3ingModule = await Test3.createTest3ingModule({
      providers: [Test3Resolver],
    }).compile();

    resolver = module.get<Test3Resolver>(Test3Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
