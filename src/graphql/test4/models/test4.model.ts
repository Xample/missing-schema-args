import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Test4 {
  @Field((type) => ID)
  id: string;

}
