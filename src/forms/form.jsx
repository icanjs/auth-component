import React from 'react';
import { Form } from 'react-form';

export default ({
  children,
  defaultValues,
  formSubmitted,
  validate
}) => {
  return (
    <div>
      <Form
        onSubmit={formSubmitted}
        defaultValues={defaultValues}
        validate={validate}
      >
        {children}
      </Form>
    </div>
  );
};
