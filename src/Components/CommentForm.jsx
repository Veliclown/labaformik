
import React from 'react';
import { Formik, Form } from 'formik';
import CustomInput from './CustomInput';

const CommentForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        comment: '',
      }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Ім’я обов’язкове';
        }
        if (!values.comment) {
          errors.comment = 'Коментар обов’язковий';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        console.log('Comment submitted:', values);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <CustomInput name="name" label="Ваше ім’я" />
          <CustomInput name="comment" label="Ваш коментар" />
          <button type="submit">Додати коментар</button>
        </Form>
      )}
    </Formik>
  );
};

export default CommentForm;
