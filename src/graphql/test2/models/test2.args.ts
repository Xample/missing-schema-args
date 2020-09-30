import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class Test2Args {
  simpleBoolean!: boolean;
}
