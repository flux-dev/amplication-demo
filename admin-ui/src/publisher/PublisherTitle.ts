import { Publisher as TPublisher } from "../api/publisher/Publisher";

export const PUBLISHER_TITLE_FIELD = "displayName";

export const PublisherTitle = (record: TPublisher): string => {
  return record.displayName || record.id;
};
