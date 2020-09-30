import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Test3 } from '../../test3/models/test3.model';

@ObjectType()
export class Test2 {
  @Field((type) => ID)
  id: string;

  @Field(()=> Test3)
  test3?: Test3
}
