import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BidderResolverBase } from "./base/bidder.resolver.base";
import { Bidder } from "./base/Bidder";
import { BidderService } from "./bidder.service";

@graphql.Resolver(() => Bidder)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BidderResolver extends BidderResolverBase {
  constructor(
    protected readonly service: BidderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
