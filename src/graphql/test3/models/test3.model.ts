import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Test4 } from '../../test4/models/test4.model';

@ObjectType()
export class Test3 {
  @Field((type) => ID)
  id: string;

  @Field(()=> Test4)
  test4?: Test4
}
