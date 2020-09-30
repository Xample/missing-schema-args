import { Module } from '@nestjs/common';
import { Test2Resolver } from './test2.resolver';

@Module({
  providers: [Test2Resolver],
  exports: [Test2Resolver]
})
export class Test2Module {}
