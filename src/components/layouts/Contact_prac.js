import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

/*
  ※ 구현목표
    1. input 2개, textarea 1개, submit 1개
    2. input과 textarea는 필수사항
    3. 필수사항은 입력하지 않으면 input 아래에 경고문구 표시
      - submit시 표시
      - 포커스 아웃시 표시
    4. submit하면 alert으로 표시(일단은)
  
  ※ 필요 API
    1. register
      - 필요 옵션
        - required: 해당 인풋을 필수요소로 만듦
        - minLength: 해당 인풋의 최소 길이를 정함
          - min은 사용해도 소용이 없었는데, min은 여러 옵션을 고르는 경우에 사용하는 옵션인 것 같음
          - max, maxLength도 동일하게 작동할 것으로 추정
        - pattern: 인풋에 입력된 값이 설정한 정규식 패턴과 맞는지 검증 - 이메일 형식 검증에 사용할 예정
    2. handleSubmit - V
    3. reset - V
    4. setError -> 필요 없음 - 에러 메세지를 화면에 표시하는 다른 방법이 존재함
    5. clearErrors -> 필요 없음 - 각 인풋은 기본값으로 내용이 입력되면 내용되는 인풋마다 에러 메세지가 사라짐
    6. formState
      - isSubmitSuccessful -> reset에 사용
      - isValid -> submit에 사용할 수도 있는데, useForm의 mode가 onChange거나 onBlur여야만 사용 가능함 - 필요 없음
      - errors -> 에러 검출에 사용?? => 에러 메세지를 화면에 출력하는데 매우 중요한 역할 수행

  useFormState랑 ErrorMessage 써도 될거 같긴 함 - 추후 테스트
*/

const ContactPrac = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { isSubmitSuccessful, errors }
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log('submit successful !');
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSuccess = data => {
    const result = `name: ${data.name}, email: ${data.email}, contents: ${data.contents}`;
    alert(result);
  };

  const onErrors = error => console.error(error);

  return (
    <div>
      <h1>Contact Practice</h1>
      <form
        onSubmit={handleSubmit(onSuccess, onErrors)}
      >
        <div>
          <input
            type="text"
            {...register('name', {
              required: '※성함을 입력해주세요.',
              minLength: {
                value: 2,
                message: '※두 글자 이상 입력해주세요.'
              }
            })}
          />
          { errors.name && <span className="errors" style={{color: 'red'}}>{ errors.name.message }</span> }
          <input type="text" {...register('email', {
            required: '※이메일을 입력해주세요.',
            pattern: {
              value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: '※이메일 형식과 맞지 않습니다.'
            }
          })} />
          { errors.email && <span className="errors" style={{color: 'red'}}>{ errors.email.message }</span>}
        </div>
        <div>
          <textarea
            {...register('contents',{
              required: '※내용을 입력해주세요'
            })}
          />
          { errors.contents && <span className="errors" style={{color: 'red'}}>{ errors.contents.message }</span> }
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactPrac;