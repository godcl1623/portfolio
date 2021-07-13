/* Dependencies */
// Libraries
import React from 'react';
// modules
import FormLayout from './form/FormLayout';
import FormLogic from './form/FormLogic';

const Contact = () => {
  // FormLogic 참조
  const { methods, refs } = FormLogic();
  // 실제 폼 양식을 표시하는 컴포넌트
  return <FormLayout hookForm={methods} refs={refs} />;
};

export default Contact;