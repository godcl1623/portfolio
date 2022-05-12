/* ***** Dependencies ***** */
// libraries
import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';
// modules
import { selectedHeader } from '../../../../modules/customfunctions';
import { A } from '../../../../styles/elementsPreset';
import { flex, mediaQuery } from '../../../../styles/presets';
import Carousel from '../../../utils/Carousel';

function btnGenerator(list, Comp) {
  return list.map((ele, idx) => <Comp key={`link_${idx}`} href={ ele.address } target="_blank" rel="noreferrer noopener">{ ele.name }</Comp>)
}

/* ***** Component Body ***** */
const BodySection = props => {
  const [ linkLists, setLinkLists ] = React.useState(['a']);
  const processedImgList = [props.images[props.images.length - 1], ...props.images, props.images[0]];
  const imgArr = processedImgList.map((img, idx) => (
    <img
      src={img}
      alt={`screenshot_${idx + 1}`}
      key={`screenshot_${idx + 1}`}
      css={css`
        width: 400px;
        height: 225px;
      `}
    />
  ));
  React.useEffect(() => {
    if (props.links) {
      setLinkLists(props.links);
    }
  }, [props.links]);
  return (
  <div
    className={props.className}
    css={css`
      margin: 0 1.25rem;
      max-width: 100%;
      padding: 3.125rem 0;
      width: 100%;
      height: 100%;
      min-height: 0;
      overflow-y: scroll;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: start;
    `}
  >
    { selectedHeader(props.header) }
    <Carousel
      data={imgArr}
      mode="timer"
      options={{
        modalState: true,
        customSizes: {
          width: '28%',
          height: '225px'
        },
        timer: 5
      }}
    />
    <div css={css`
      margin-bottom: 3.125rem;
      width: 80%;

      h1 {
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: calc(var(--h1) / 2);
        font-weight: bold;
      }

      h2 {
        margin-top: 25px;
        margin-bottom: 10px;
        font-size: calc(var(--h2) / 1.5);
      }

      h3 {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: calc(var(--h3) / 1.25);
      }

      ol, ul {
        margin-left: 30px;
      }

      li {
        margin-top: 8px;
        line-height: 1.75;
      }

      ul > li {
        list-style: disc;
      }

      ol > li {
        list-style: decimal;
      }

      p {
        font-size: calc(var(--p) * 1.15);
      }
    `}>
      <ReactMarkdown
        children={props.comments}
      />
    </div>
    <div
      className="link-container"
      css={css`
        width: 70%;
        height: 3.125rem;
        ${flex.horizontal.center}
        -ms-flex-pack: distribute;
        justify-content: space-around;
        ${mediaQuery.setMobile} {
          position: relative;
          bottom: 1.875rem;
        }

        a {
          padding: 0.625rem 0.938rem 0.938rem;
          @media (max-width: 600px) {
            padding: 0.313rem 0.625rem 0.625rem;
          }
          min-width: 5.313rem;
          min-height: 2.188rem;
          text-align: center;
          font-size: calc(var(--p) * 1.2);
        }
      `}
    >
      { btnGenerator(linkLists, A)}
    </div>
  </div>
)};

export default React.memo(BodySection);