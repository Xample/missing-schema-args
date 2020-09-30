import { Args, ResolveField, Resolver } from '@nestjs/graphql';
import { Test4Args } from '../test4/models/test4.args';
import { Test4 } from '../test4/models/test4.model';
import { Test3 } from './models/test3.model';

@Resolver(of => Test3)
export class Test3Resolver {

  @ResolveField(of => Test4)
  test4(@Args() args: Test4Args): Test4 {
    return { id: 'D' };
  }

}
