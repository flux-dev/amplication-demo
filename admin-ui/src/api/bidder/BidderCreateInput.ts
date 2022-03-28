import { InputJsonValue } from "../../types";

export type BidderCreateInput = {
  bidderCode?: string | null;
  bidderSettings?: InputJsonValue;
};
