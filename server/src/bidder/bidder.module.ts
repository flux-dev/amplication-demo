import { Module } from "@nestjs/common";
import { BidderModuleBase } from "./base/bidder.module.base";
import { BidderService } from "./bidder.service";
import { BidderController } from "./bidder.controller";
import { BidderResolver } from "./bidder.resolver";

@Module({
  imports: [BidderModuleBase],
  controllers: [BidderController],
  providers: [BidderService, BidderResolver],
  exports: [BidderService],
})
export class BidderModule {}
