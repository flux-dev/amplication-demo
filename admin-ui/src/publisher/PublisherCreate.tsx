import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PublisherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Display Name" source="displayName" />
        <TextInput label="Domain URL" source="domainUrl" />
        <BooleanInput label="Done" source="done" />
      </SimpleForm>
    </Create>
  );
};
