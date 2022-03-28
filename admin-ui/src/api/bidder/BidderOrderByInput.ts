import { SortOrder } from "../../util/SortOrder";

export type BidderOrderByInput = {
  bidderCode?: SortOrder;
  bidderSettings?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
