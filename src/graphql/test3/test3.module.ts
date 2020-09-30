import { Module } from '@nestjs/common';
import { Test3Resolver } from './test3.resolver';

@Module({
  providers: [Test3Resolver],
  exports: [Test3Resolver]
})
export class Test3Module {}
