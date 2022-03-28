import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BidderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Bidder code" source="bidderCode" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
