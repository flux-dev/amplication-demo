import { Module } from "@nestjs/common";
import { PublisherModuleBase } from "./base/publisher.module.base";
import { PublisherService } from "./publisher.service";
import { PublisherController } from "./publisher.controller";
import { PublisherResolver } from "./publisher.resolver";

@Module({
  imports: [PublisherModuleBase],
  controllers: [PublisherController],
  providers: [PublisherService, PublisherResolver],
  exports: [PublisherService],
})
export class PublisherModule {}
