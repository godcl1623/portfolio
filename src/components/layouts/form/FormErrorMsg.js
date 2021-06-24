import React from 'react';
import FormLogic from './FormLogic';

const FormErrorMsg = ({ type, test }) => {
  // const { methods } = FormLogic();
  // const { errorMsgGenerator } = methods;
  console.log(test('name'))
  return (
    <div>
      {/* { errorMsgGenerator(type) } */}
      <h1>test</h1>
    </div>
  );
};

export default FormErrorMsg;