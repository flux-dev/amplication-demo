import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PublisherServiceBase } from "./base/publisher.service.base";

@Injectable()
export class PublisherService extends PublisherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
