import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CustomInput = ({ label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <Field {...props} />
      <ErrorMessage name={props.name} component="div" className="error" />
    </div>
  );
};

export default CustomInput;
