import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import FormLayout from './form/FormLayout';
import FormLogic from './form/FormLogic';

const Contact = () => {
  const { methods, refs } = FormLogic();

  return <FormLayout hookForm={methods} refs={refs} />;
};

export default Contact;