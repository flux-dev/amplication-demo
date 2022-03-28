import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BidderService } from "./bidder.service";
import { BidderControllerBase } from "./base/bidder.controller.base";

@swagger.ApiTags("bidders")
@common.Controller("bidders")
export class BidderController extends BidderControllerBase {
  constructor(
    protected readonly service: BidderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
