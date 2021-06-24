import React from 'react';
import { useForm } from 'react-hook-form';

const FormLogic = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm();

  return {
    refs: {
      onSuccess: data => {
        const result =
          `name: ${data.name}, email: ${data.email}, contents: ${data.contents}`;
        alert(result);
      },

      onErrors: error => console.error(error),

      requiredMsgs: {
        name: '※성함을 입력해주세요.',
        email: '※이메일을 입력해주세요.',
        contents: '※내용을 입력해주세요'
      },
    },

    methods: {
      clearForm: () => {
        if (isSubmitSuccessful) {
          reset();
        }
      },

      handleSubmit: () => handleSubmit(this.refs.onSuccess, this.refs.onErrors),

      registerInput: inputName => {
        switch (inputName) {
          case 'name':
            return {...register(inputName, {
              required: this.refs.requiredMsgs.name,
              minLength: {
                value: 2,
                message: '※두 글자 이상 입력해주세요.'
              }
            })}
          case 'text':
            return {...register(inputName, {
              required: this.refs.requiredMsgs.email,
              pattern: {
                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: '※이메일 형식과 맞지 않습니다.'
              }
            })}
          case 'contents':
            return {...register(inputName, {
              required: this.refs.requiredMsgs.contents
            })}
          default:
            break;
        };
      },

      errorMsgGenerator: type => errors[type] && <span className="errors" style={{color: 'red'}}>{ errors[type].message }</span>
    }
  };
};

export default FormLogic;