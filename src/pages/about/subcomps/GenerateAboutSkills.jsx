import React from 'react';

export default function GenerateAboutSkills({ data }) {
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
