import React, { useEffect } from 'react';

const FormLayout = ({ hookForm, refs }) => {
  const { clearForm, handleSubmit, registerInput, errorMsgGenerator } = hookForm;
  const { onSuccess, onErrors } = refs;

  useEffect(() => {
    clearForm();
  }, [clearForm]);

  return (
    <div className="form-layout">
      <form onSubmit={handleSubmit(onSuccess, onErrors)}>
        <div>
          <input type="text" placeholder="Name" {...registerInput('name')} />
          { errorMsgGenerator('name') }
          <input type="text" placeholder="Email" {...registerInput('email')} />
          { errorMsgGenerator('email') }
        </div>
        <textarea placeholder="Contents" {...registerInput('contents')} />
        { errorMsgGenerator('contents') }
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormLayout;