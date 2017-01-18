import React from 'react';
import { FormField } from 'react-form';
import isEqual from 'lodash.isequal';

export default ({field, query, params, cachedParams, updateCachedParams, otherArgs}) => {
  return (
    <FormField field={field}>
      {({setValue, getValue}) => {
        if (!isEqual(params, cachedParams)) {
          setTimeout(() => {
            updateCachedParams(params);
            query(params, otherArgs).then(response => {
              setValue('');
            })
            .catch(error => {
              setValue(error.message || error);
            });
          });
        }
        return (
          <input
            type='hidden'
            value={getValue()}
          />
        );
      }}
    </FormField>
  );
};
