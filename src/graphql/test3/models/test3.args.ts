import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class Test3Args {
  simpleBoolean!: boolean;
}
