import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type BidderWhereInput = {
  bidderCode?: StringNullableFilter;
  bidderSettings?: JsonFilter;
  id?: StringFilter;
};
