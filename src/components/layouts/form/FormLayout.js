import React, { useEffect } from 'react';
import { useStore } from 'react-redux';

const FormLayout = ({ hookForm, refs }) => {
  const {
    clearForm,
    handleSubmit,
    registerInput,
    errorMsgGenerator,
    setValue
  } = hookForm;
  const { onSuccess, onErrors } = refs;
  const { modalState } = useStore().getState();

  useEffect(() => {
    clearForm();
    if (modalState === false) {
      setValue('name', '');
      setValue('email', '');
      setValue('contents', '');
    }
  }, [clearForm, modalState, setValue]);

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