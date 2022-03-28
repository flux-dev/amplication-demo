import { Bidder as TBidder } from "../api/bidder/Bidder";

export const BIDDER_TITLE_FIELD = "bidderCode";

export const BidderTitle = (record: TBidder): string => {
  return record.bidderCode || record.id;
};
