import { InputJsonValue } from "../../types";

export type BidderUpdateInput = {
  bidderCode?: string | null;
  bidderSettings?: InputJsonValue;
};
