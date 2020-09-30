import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Test2 } from '../../test2/models/test2.model';

@ObjectType()
export class Test {
  @Field((type) => ID)
  id!: string;

  @Field(()=> Test2)
  test2?: Test2
}
