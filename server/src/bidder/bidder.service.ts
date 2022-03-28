import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BidderServiceBase } from "./base/bidder.service.base";

@Injectable()
export class BidderService extends BidderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
