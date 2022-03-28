import { PublisherWhereInput } from "./PublisherWhereInput";
import { PublisherOrderByInput } from "./PublisherOrderByInput";

export type PublisherFindManyArgs = {
  where?: PublisherWhereInput;
  orderBy?: Array<PublisherOrderByInput>;
  skip?: number;
  take?: number;
};
