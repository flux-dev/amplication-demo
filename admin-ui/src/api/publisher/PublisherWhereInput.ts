import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PublisherWhereInput = {
  displayName?: StringFilter;
  domainUrl?: StringFilter;
  done?: BooleanNullableFilter;
  id?: StringFilter;
};
