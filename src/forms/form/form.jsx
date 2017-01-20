import React from 'react';
import { Form } from 'react-form';
import FormError from '../form-error/form-error';

export default ({
  children,
  defaultValues,
  loadState,
  preValidate,
  validate,
  onValidationFail,
  onChange,
  saveState,
  willUnmount,
  preSubmit,
  formSubmitted,
  postSubmit,
  error,
  clearError
}) => {
  return (
    <div>
      <Form
        onSubmit={formSubmitted}
        defaultValues={defaultValues}
        validate={validate}
        preValidate={preValidate}
        onValidationFail={onValidationFail}
        onChange={onChange}
        preSubmit={preSubmit}
        postSubmit={postSubmit}
        loadState={loadState}
        saveState={saveState}
        willUnmount={willUnmount}
      >
        {children({error, clearError})}
      </Form>
    </div>
  );
};
