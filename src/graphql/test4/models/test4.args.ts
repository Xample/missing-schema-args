import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class Test4Args {
  simpleBoolean!: boolean;
}
