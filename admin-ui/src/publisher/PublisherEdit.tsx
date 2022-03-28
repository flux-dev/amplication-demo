import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PublisherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Display Name" source="displayName" />
        <TextInput label="Domain URL" source="domainUrl" />
        <BooleanInput label="Done" source="done" />
      </SimpleForm>
    </Edit>
  );
};
