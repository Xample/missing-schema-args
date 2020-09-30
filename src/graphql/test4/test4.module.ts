import { Module } from '@nestjs/common';
import { Test4Resolver } from './test4.resolver';

@Module({
  providers: [Test4Resolver],
  exports: [Test4Resolver]
})
export class Test4Module {}
