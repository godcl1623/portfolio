import React from 'react';
import { useHistory } from 'react-router-dom';

/* functions */
// function for displaying paragraphs
const genContent = object => {
  if (object === undefined) {
    return;
  }
  const target = Object.keys(object);
  return target.map(data => <p>{object[data]}</p>);
};

// function for displaying sections
const genBody = object => {
  if (object === undefined) {
    return;
  }
  const { header, icon, subject, content } = object;
  const articleGenerator = subjects => subjects.map((subject, i) => (
        <article>
          { icon[i] }
          <h4>{ subject }</h4>
          <p>{ content[i] }</p>
        </article>
      ));
  return (
    <section>
      <h2>{ header }</h2>
      <hr />
      { articleGenerator(subject) }
    </section>
  );
};

// Component Body
const Common = props => {
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <div>
      <button onClick={handleClick}>홈</button>
      <h1>{props.heading}</h1>
      <hr />
      <article>
        { genContent(props.selfInfo) }
      </article>
      { genBody(props.introduction) }
      { genBody(props.skills) }
    </div>
  );
};

export default Common;