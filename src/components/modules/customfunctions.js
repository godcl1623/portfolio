// function for displaying paragraphs
export const genContent = object => {
  if (object === undefined) {
    return;
  }
  const target = Object.keys(object);
  return (
    <article>
      {target.map((data, i) => <p key={i}>{object[data]}</p>)}
    </article>
  );
};

// function for displaying sections
export const genSection = (...objects) => objects.map((object, i) => {
    if (object === undefined) {
      return;
    }
    const { header, icon, subject, content } = object;
    const articleGenerator = subjects => subjects.map((subject, j) => (
      <article key={`article ${j}`}>
        { icon[j] }
        <h4>{ subject }</h4>
        <p>{ content[j] }</p>
      </article>
    ));
    return (
      <section key={`section ${i}`}>
        { header !== '' ? <h2>{ header }</h2> : '' }
        { header !== '' ? <hr /> : '' }
        { articleGenerator(subject) }
      </section>
    );
  });