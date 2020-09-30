import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Test2Args } from '../test2/models/test2.args';
import { Test2 } from '../test2/models/test2.model';
import { TestArgs } from './models/test.args';
import { Test } from './models/test.model';

@Resolver(of => Test)
export class TestResolver {

  @Query(of => Test)
  test(@Args() args: TestArgs): Test {
    return { id: "A"}
  }

  @ResolveField(of => Test2)
    test2(@Args() args: Test2Args): Test2 {
      return { id: "B"}
    }
}
