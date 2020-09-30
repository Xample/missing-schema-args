import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class TestArgs {
  simpleBoolean!: boolean;
}
