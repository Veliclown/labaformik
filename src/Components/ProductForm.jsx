import React from 'react';
import { Formik, Form } from 'formik';
import CustomInput from './CustomInput';

const ProductForm = () => {
  return (
    <Formik
      initialValues={{
        productName: '',
        price: '',
      }}
      validate={values => {
        const errors = {};
        if (!values.productName) {
          errors.productName = 'Назва товару обов’язкова';
        }
        if (!values.price) {
          errors.price = 'Ціна обов’язкова';
        } else if (isNaN(values.price)) {
          errors.price = 'Ціна повинна бути числом';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        console.log('Product submitted:', values);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <CustomInput name="productName" label="Назва товару" />
          <CustomInput name="price" label="Ціна" />
          <button type="submit">Додати товар</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
