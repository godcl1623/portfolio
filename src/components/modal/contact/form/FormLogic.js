/* Dependencies */
// Libraries
import React from 'react';
import { useForm } from 'react-hook-form';

const FormLogic = () => {
  // https://react-hook-form.com/api/useform 참조
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
    setValue
  } = useForm();

  return {
    // methods 객체가 참조하는 항목들
    refs: {
      // handleSubmit에서 submit 성공시 실행하는 콜백
      onSuccess: data => {
        const result =
          `name: ${data.name}, email: ${data.email}, contents: ${data.contents}`;
        alert(result);
      },
      // handleSubmit에서 submit 에러 발생시 실행하는 콜백
      onErrors: error => console.error(error),
      // registerInput에서 사용하려고 했던 메세지 모음 - 오류로 인해 미사용
      requiredMsgs: {
        name: '※성함을 입력해주세요.',
        email: '※이메일을 입력해주세요.',
        contents: '※내용을 입력해주세요'
      },
    },
    // 실질적으로 기능을 실행하는 함수들
    methods: {
      // submit이 성공하면 폼 초기화
      clearForm: () => {
        if (isSubmitSuccessful) {
          reset();
        }
      },
      // submit 이벤트가 발생할 경우 실행하는 콜백
      handleSubmit,
      // 필드를 폼에 등록하는 함수 - inputName에 따라 다른 요소 반환
      registerInput: inputName => {
        switch (inputName) {
          case 'name':
            return {...register(inputName, {
              required: '※성함을 입력해주세요.',
              minLength: {
                value: 2,
                message: '※두 글자 이상 입력해주세요.'
              }
            })}
          case 'email':
            return {...register(inputName, {
              required: '※이메일을 입력해주세요.',
              pattern: {
                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: '※이메일 형식과 맞지 않습니다.'
              }
            })}
          case 'contents':
            return {...register(inputName, {
              required: '※내용을 입력해주세요'
            })}
          default:
            break;
        };
      },
      // 필드별 오류 메세지 표시 함수
      errorMsgGenerator: type => errors[type] && <span className="errors" style={{color: 'red'}}>{ errors[type].message }</span>,
      // 필드 초기화를 위한 함수 -> input의 value를 강제로 바꾼다
      setValue
    }
  };
};

export default FormLogic;