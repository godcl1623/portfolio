import React from 'react';

const FormErrorMsg = ({ type, errorMsg }) => (
    <div>
      { errorMsg(type) }
    </div>
  );

export default FormErrorMsg;