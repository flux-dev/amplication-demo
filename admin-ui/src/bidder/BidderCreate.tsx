import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BidderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bidder code" source="bidderCode" />
        <div />
      </SimpleForm>
    </Create>
  );
};
