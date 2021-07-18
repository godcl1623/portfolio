/* Dependencies */
// Libraries
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex, sizes } from '../../../../styles/presets';
import FormErrorMsg from './FormErrorMsg';

// hookForm, refs: FormLogic 참조
const FormLayout = ({ hookForm, refs }) => {
  const {
    clearForm,
    handleSubmit,
    registerInput,
    errorMsgGenerator,
    setValue
  } = hookForm;
  const { onSuccess, onErrors } = refs;
  // state modalState의 값
  const modalState = useSelector(state => state.modalState);

  useEffect(() => {
    // submit시 폼 초기화
    clearForm();
    // 모달창이 닫힐 때 폼 값들 초기화
    if (modalState === false) {
      setValue('name', '');
      setValue('email', '');
      setValue('contents', '');
    }
  }, [clearForm, modalState, setValue]);

  return (
    <div
      className="form-layout"
      css={css`
        width: 80%;
        height: 100%;
      `}
    >
      <form
        onSubmit={handleSubmit(onSuccess, onErrors)}
        css={css`
          ${flex.vertical}
          width: 100%;
          height: 100%;
          opacity: ${modalState ? '100%' : 0};
          transition: all 0.45s;
        `}
      >
        <div
          className="who-are-you"
          css={css`
            ${flex.horizontal.center}
            width: 100%;
            input {
              font-size: 16px;
            }
            .name {
              margin-right: 10px;
            }
          `}
        >
          {/* 에러 메세지 나타나면 input이 위로 밀리는 문제 해결 필요 */}
          <div className="name" css={css`${sizes.free('50%')}`}>
            <input
              type="text"
              placeholder="Name"
              {...registerInput('name')}
              css={css`
                ${sizes.full}
              `}
            />
            <FormErrorMsg type="name" errorMsg={errorMsgGenerator} />
          </div>
          <div className="email" css={css`${sizes.free('50%')}`}>
            <input
              type="text"
              placeholder="Email"
              {...registerInput('email')} 
              css={css`
                ${sizes.full}
              `}
            />
            <FormErrorMsg type="email" errorMsg={errorMsgGenerator} />
          </div>
        </div>
        <div
          className="tell-your-story"
          css={css`
            margin: 20px 10px;
            width: 100%;
            textarea {
              width: 100%;
              height: 100px;
              font-size: 16px;
              overflow-y: scroll;
            }
          `}
        >
          <textarea placeholder="Contents" {...registerInput('contents')} />
          <FormErrorMsg type="contents" errorMsg={errorMsgGenerator} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormLayout;