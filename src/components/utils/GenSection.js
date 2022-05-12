/* ***** Dependencies ***** */
// libraries
import React from 'react';
import { useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// components
import GenArticle from './GenArticle';
// modules
import { flex, mediaQuery } from '../../styles/presets';

function genArticles(data) {
  return data.subject.map((subject, idx) => (
    <React.Fragment key={`frag_${idx}`}>
      <h3>{ subject }</h3>
      <hr />
      <ul>
        { data.content[idx].map((content, indx) => {
          const rawContent = content.split(':');
          const title = <span className="title">{ rawContent[0] }</span>
          const newContent = <span className="content">{ rawContent[1] }</span>
          return (
            <div className="li_cnt" key={`li_cnt_${indx}`}>
              <span className="bullet">○</span>
              <li>
                {title}: {newContent}
              </li>
            </div>
          );
        })}
      </ul>
    </React.Fragment>
    ))
}

/* ***** Component Body ***** */
const GenSection = ({ data, sub: Sub, parentsHeader }) => {
  const location = useLocation();
  // if no data passed...
  let result = '';
  if (data == null) {
    if (Sub == null) {
      result = <React.Fragment />;
    } else {
      result = Sub
    }
    return result;
  }

  // if some data passed...
  // Props extracting
  const { header, setState } = data;

  return (
    <section
      css={css`
        padding: ${setState === undefined ? '2%' : '1%'} 0;
        padding: 30px 0;
        display: ${location.pathname === '/about' ? 'flex' : 'grid'};
        ${
          location.pathname !== '/about'
            ?
              `
                grid-template: "a a"
                                "a a";
                grid-gap: 20px 20px;
                justify-items: center;
              `
            :
              `
                flex-direction: column;
              `
        }
        
        ${mediaQuery.setMobile} {
          ${setState === undefined ? '' : `${flex.vertical}`};
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
        }
        width: 100%;
        height: ${setState === undefined ? '' : '85%'};
        -webkit-transition: all 2.5s;
        -o-transition: all 2.5s;
        transition: all 2.5s;
        overflow-y: auto;
      `}
    >
      <div
        className="area-header"
        css={css`
          margin: 1.25rem 0;
          ${header === '' ? `display: none;` : ''}
        `}
      >
        {
          header !== ''
            ? <h2
                css={css`
                  margin-bottom: 0.625rem;
                  padding-left: 2.188rem;
                  ${mediaQuery.setMobile} {
                    margin-bottom: 0.313rem;
                    padding-left: 0.625rem;
                  }
              `}>{ header }</h2>
            : ''
        }
        {
          header !== ''
            ? <hr css={css`
                border-color: var(--point-dark);
              `}/>
            : ''
        }
      </div>
      {
        parentsHeader != null
          ?
            <GenArticle data={data} fold={false}/>
          :
            <article
              css={css`
                padding: 0 10px;
                white-space: pre-line;

                ul {
                  padding-top: 10px;
                  padding-left: 20px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: flex-start;
                  font-size: var(--p);
                }

                .li_cnt {
                  margin-top: 10px;
                  display: flex;
                  align-items: center;

                  span.bullet {
                    margin-right: 5px;
                    font-size: 10px;
                  }

                  span.title {
                    font-weight: bold;
                  }
                }

                h3 {
                  margin-top: 30px;
                  padding-left: 20px;
                }

                hr {
                  width: 100%;
                }
              `}
            >
              {
                header === 'Skills'
                  ? genArticles(data)
                  : <p key={`introduction_p`}>{ data.content }</p>
              }
            </article>
      }
    </section>
  );
};

export default React.memo(GenSection);