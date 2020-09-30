import { Args, ResolveField, Resolver } from '@nestjs/graphql';
import { Test3Args } from '../test3/models/test3.args';
import { Test3 } from '../test3/models/test3.model';
import { Test2 } from './models/test2.model';

@Resolver(of => Test2)
export class Test2Resolver {

  @ResolveField(of => Test3)
  test3(@Args() args: Test3Args): Test3 {
    return { id: 'C' };
  }

}
