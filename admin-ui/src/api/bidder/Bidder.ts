import { JsonValue } from "type-fest";

export type Bidder = {
  bidderCode: string | null;
  bidderSettings: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
