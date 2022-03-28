import { BidderWhereInput } from "./BidderWhereInput";
import { BidderOrderByInput } from "./BidderOrderByInput";

export type BidderFindManyArgs = {
  where?: BidderWhereInput;
  orderBy?: Array<BidderOrderByInput>;
  skip?: number;
  take?: number;
};
