import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PublisherResolverBase } from "./base/publisher.resolver.base";
import { Publisher } from "./base/Publisher";
import { PublisherService } from "./publisher.service";

@graphql.Resolver(() => Publisher)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PublisherResolver extends PublisherResolverBase {
  constructor(
    protected readonly service: PublisherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
