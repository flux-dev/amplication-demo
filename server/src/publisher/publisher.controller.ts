import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PublisherService } from "./publisher.service";
import { PublisherControllerBase } from "./base/publisher.controller.base";

@swagger.ApiTags("publishers")
@common.Controller("publishers")
export class PublisherController extends PublisherControllerBase {
  constructor(
    protected readonly service: PublisherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
