import html from '../svgs/01-html.svg';
import css from '../svgs/02-css.svg';
import js from '../svgs/03-js.svg';
import react from '../svgs/04-react.svg';
import redux from '../svgs/05-redux.svg';
import node from '../svgs/06-node.svg';
import mysql from '../svgs/07-mysql.svg';
import python from '../svgs/08-python.svg';

const sampleTexts = {
  intro1: `만들어내는 것에 그치지 않고, 문제 해결을 위해 고민하고 노력하는 개발자가 되고 싶습니다.
    프로젝트를 진행하며 문제 상황에 맞닥뜨렸을 때, 문제를 회피하기보다 원인 파악을 통한 해결을 위해 노력했습니다.
    원인 파악과 해결 과정을 기록하며 경험을 바탕으로 발전하는 성향을 통해 프로젝트에 기여하겠습니다.
  `,

  skills1: `Front-End: JavaScript, React.js, TypeScript`,

  skills2: `Back-End: Node.js`,

  skills3: `Database: MySQL`,

  skills4: `Front-End: Windowing 등 최적화 기법`,

  skills5: `Database: GraphQL, NoSQL`,
}

export const selfInfo = {
  name: '이치행',
  phone: '(Tel) 010-6313-9037',
  mail: '(email) godcl1623@gmail.com'
};


export const introduction = {
  header: 'Introduction',
  icon: '',
  subject: [],
  content: [sampleTexts.intro1]
};

export const skills = {
  header: 'Skills',
  subject: ['사용할 수 있는 기술', '관심 있는 기술'],
  icon: [html],
  content: [
    [sampleTexts.skills1, sampleTexts.skills2, sampleTexts.skills3],
    [sampleTexts.skills4, sampleTexts.skills5]
  ]
}