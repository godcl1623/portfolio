const tools = {
  // function for displaying paragraphs
  genContent: object => {
    if (object === undefined) {
      return;
    }
    const target = Object.keys(object);
    return (
      <article>
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
          <article key={`article ${j}`}>
            <button onClick={setState} data-project={`project ${j + 1}`}>{ icon[j] }</button>
            <h4><button onClick={setState} data-project={`project ${j + 1}`}>{ subject }</button></h4>
          </article>
        );
      }
      return (
        <article key={`article ${j}`}>
          { icon[j] }
          <h4>{ subject }</h4>
          <p>{ content[j] }</p>
        </article>
      );
    });
    return (
      <section key={`section ${i}`}>
        { header !== '' ? <h2>{ header }</h2> : '' }
        { header !== '' ? <hr /> : '' }
        { articleGenerator(subject) }
      </section>
    );
  }),

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
    return <h1 style={{ border: '1px solid black' }}>{ header }</h1>;
  }
}

export default tools;