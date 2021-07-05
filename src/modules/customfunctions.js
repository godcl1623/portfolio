/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flex } from '../styles/presets';

const tools = {
  // function for displaying paragraphs
  genContent: object => {
    if (object === undefined) {
      return;
    }
    const target = Object.keys(object);
    return (
      <article
        css={css`
          margin: 40px auto;
          ${flex.vertical}
          width: 300px;

          p {
            margin: 10px 0;
          }
        `}
      >
        {target.map((data, i) => <p key={i}>{object[data]}</p>)}
      </article>
    );
  },

  // function for displaying sections
  genSection: (...objects) => objects.map((object, i) => {
    if (object === undefined) {
      return;
    }
    const { header, icon, subject, content, setState } = object;
    const articleGenerator = subjects => subjects.map((subject, j) => {
      if (setState !== undefined) {
        return (
          <article
            key={`article ${j}`}
            css={css`
              // margin: 0 5%;
              ${flex.vertical}
              width: 33%;
            `}
          >
            <img
              key={ `icon ${j}` }
              src={ icon[j] }
              alt="project-preview"
              onClick={setState}
              data-project={`project ${j + 1}`}
              css={css`
                width: 80%;
                max-width: 200px;
                height: 350px;
              `}
            />
            <button
              key={ `button ${j}` }
              onClick={setState}
              data-project={`project ${j + 1}`}
              css={css`
                margin-top: 30px;
              `}
            >{ subject }</button>
          </article>
        );
      }
      return (
        <article
          key={`article ${j}`}
          css={css`
            margin: 30px auto;
            padding: 0 35px;
            ${flex.vertical}
            align-items: flex-start;
            text-align: justify;
          `}
        >
          <div
            key={ `article ${j}` }
            className="article-header"
            css={css`
              ${flex.horizontal.center}
            `}
          >
            {icon[j] !== undefined ? <img key={ `icon ${j}` } src={ icon[j] } alt="icon-html" /> : ''}
            <h3
              key={ `header ${j}` }
              css={css`
                ${icon[j] === undefined ? '' : 'margin-left: 10px;'}
              `}
            >{ subject }</h3>
          </div>
          <div className="paragraphs-container">
            { tools.dividePara(content[j]) }
          </div>
        </article>
      );
    });
    return (
      <section
        key={`section ${i}`}
        css={css`
          margin: ${setState === undefined ? '60px' : '80px'} 0;
          ${setState === undefined ? '' : `${flex.horizontal.center}`}
        `}
      >
        <div
          key={ `header-container ${i}` }
          className="area-header"
          css={css`
            margin: 20px 0;
          `}
        >
          {
            header !== ''
              ? <h2
                  key={ `header ${i}` }
                  css={css`
                    margin-bottom: 10px;
                    padding-left: 35px;
                `}>{ header }</h2>
              : ''
          }
          {
            header !== ''
              ? <hr css={css`
                  border-color: white;
                `}/>
              : ''
          }
        </div>
        { articleGenerator(subject) }
      </section>
    );
  }),

  dividePara: paragraphs => {
    const dividedPara = paragraphs.split('\n');
    return dividedPara.map(paragraph => {
      if (paragraph === '') return;
      return (
        <p
          key={paragraph}
          css={css`
            margin-top: 10px;
          `}
        >{paragraph}</p>
      );
    });
  },

  // selectedProject 값에 따라 다른 제목 표시 -> 내용 표시로 변경
  selectedHeader: state => {
    let header = '';
    // 추후 반복문으로 구현
    switch (state) {
      case 'project 1':
        header = 'Project 1';
        break;
      case 'project 2':
        header = 'Project 2';
        break;
      case 'project 3':
        header = 'Project 3';
        break;
      default:
        break;
    }
    return (
      <h1
        key={state}
        css={css`
          margin-bottom: 40px;
          text-align: center;
        `}
      >{ header }</h1>
    );
  },

  debouncer: (func, wait = 14, immediate = true) => {
    let timeout;
    return (...argms) => {
      const context = this
      const args = argms;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}

export default tools;