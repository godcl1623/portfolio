import html from '../svgs/01-html.svg';
import css from '../svgs/02-css.svg';
import js from '../svgs/03-js.svg';
import react from '../svgs/04-react.svg';
import redux from '../svgs/05-redux.svg';
import node from '../svgs/06-node.svg';
import mysql from '../svgs/07-mysql.svg';
import python from '../svgs/08-python.svg';

const sampleTexts = {
  intro1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus sollicitudin diam, quis gravida mauris ultricies sit amet. Aenean varius augue elit. Cras pretium, lacus non gravida ullamcorper, erat sem rhoncus dui, hendrerit fermentum purus nisl ut est. Phasellus vel leo dui. In non dictum risus. Suspendisse non risus vel mi iaculis scelerisque ut at tortor. Duis gravida cursus turpis, vel congue velit vestibulum in.

  Sed sollicitudin eu eros sed finibus. Aenean aliquam elementum pharetra. Ut vitae mauris at arcu posuere facilisis. Fusce placerat pharetra augue ut sagittis. In volutpat elementum tempor. Sed vitae ligula nec sapien porttitor tempus sed vitae tortor. Maecenas lacinia quam volutpat leo consectetur auctor. Curabitur venenatis quam interdum blandit efficitur. Vivamus ultrices neque in urna aliquet malesuada. Praesent feugiat hendrerit leo, ut dapibus orci ullamcorper id. Phasellus ipsum dolor, consectetur at dolor vel, semper viverra eros. Etiam maximus feugiat purus eu scelerisque.`,

  intro2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et tortor vitae sapien porta semper id nec sem. Phasellus eget facilisis dui, commodo finibus sapien. Sed molestie quis turpis eget placerat. Sed a nunc ac libero dictum tristique. Sed suscipit quam vel dolor pretium, at rutrum quam porttitor. Ut vel odio eget quam fringilla dictum. In in odio odio. Aenean tristique porttitor odio, vel volutpat ligula pulvinar ultricies. Mauris ac elementum odio, ut finibus magna. Nam blandit est et molestie tempus. In quis dapibus dui. Mauris placerat vitae erat ut rutrum. Nulla dui sapien, tincidunt id pellentesque id, egestas in enim. Vestibulum maximus aliquam scelerisque.

  Etiam mauris risus, blandit quis lacus a, hendrerit tincidunt nisl. Etiam finibus tempor risus quis bibendum. Suspendisse pretium mi vel sem dignissim, in egestas felis congue. Quisque vehicula vehicula elit, ut luctus erat. Praesent luctus tempor nibh, eu viverra tortor pellentesque id. Sed interdum massa et posuere efficitur. Vestibulum ac semper metus. Fusce ut mi tellus. Nulla vulputate urna elit, at feugiat ipsum rhoncus eget. Sed ut lacinia purus. Sed porta finibus erat, ut accumsan risus fermentum eget.
  
  Morbi massa purus, accumsan eget faucibus ac, aliquam eget nisl. Nam lacinia risus vel turpis eleifend scelerisque. Curabitur sed leo eget est commodo semper ac in arcu. Maecenas sapien ante, consectetur quis lacinia ac, accumsan vitae risus. Suspendisse leo quam, maximus a dolor eu, sollicitudin ornare odio. Mauris aliquam et metus sit amet tincidunt. Suspendisse massa purus, consectetur sit amet risus quis, ultricies porttitor quam. Duis eget tellus vel est aliquam hendrerit. Donec eget nibh finibus orci pellentesque viverra a vel ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vitae leo vel arcu varius pulvinar vitae vel leo. Vivamus lacinia ex ac interdum scelerisque.`,

  skills1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ligula eu ipsum sodales sollicitudin quis eget sapien. Ut tristique ipsum vestibulum mi iaculis dictum. Donec euismod hendrerit velit ut euismod. Ut fermentum et massa vel vulputate. Curabitur non sem iaculis, gravida arcu ac, vestibulum libero. Sed pretium metus ac.`,

  skills2: `Donec molestie rutrum urna non varius. Aenean quis venenatis tortor. Donec at est in augue congue pulvinar ac a ipsum. Quisque sit amet sagittis sem. Vestibulum justo mauris, faucibus vel felis non, rutrum faucibus purus. Donec placerat dictum nunc at bibendum. Suspendisse cursus quam nibh.`,

  skills3: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque et dictum nisi. Etiam semper vulputate mollis. Ut quis orci vitae lacus vehicula scelerisque vitae eu urna. Cras suscipit mauris vitae pulvinar dignissim. Maecenas nec ornare libero. Nullam luctus est ac pellentesque malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et.`,

  skills4: `Sed malesuada neque id dapibus posuere. Morbi vehicula ultricies tellus, et eleifend augue fermentum a. Pellentesque id ullamcorper lectus. Nunc nisi metus, interdum sed gravida at, dapibus vel ligula. Donec vitae pretium erat. Nam semper massa eu eros finibus, et condimentum felis facilisis. Mauris sed elit ac mauris blandit porta.`,

  skills5: `Duis et pulvinar leo. Donec a lacus at odio tempus mollis a non massa. Nullam vitae rutrum arcu. Aliquam mattis auctor turpis, fringilla pharetra felis viverra euismod. Mauris aliquam commodo purus, eu elementum leo finibus a. Integer tempus, est eget sagittis ullamcorper, turpis ex ultrices risus, eget sagittis.`,

  skills6: `Nunc vitae erat sit amet odio dictum pulvinar. Cras nec sem ac libero ornare semper nec sit amet neque. Cras auctor sapien eget enim tempus, sit amet commodo lacus pretium. Sed ut ipsum interdum odio feugiat lobortis nec id nulla.`,

  skills7: `Proin luctus, massa et tincidunt mattis, velit velit vulputate magna, ac pharetra felis dui eu leo. Nam et libero posuere, convallis purus in, accumsan lacus. Mauris at placerat ligula, in euismod magna. Nullam fringilla odio et eros fringilla efficitur. Cras faucibus leo.`,

  skills8: `Vestibulum non tincidunt ligula. Praesent lacinia purus vitae lorem interdum lobortis ut et dui. Nam accumsan fermentum tincidunt. Praesent sit amet tincidunt ipsum, non congue arcu. Donec nulla tellus, ultrices nec euismod at, suscipit eu.`
}

export const selfInfo = {
  name: '이치행',
  birth: '1992.07.31',
  phone: '(Tel) 010-6313-9037',
  mail: '(email) godcl1623@gmail.com'
};


export const introduction = {
  header: 'Introduction',
  icon: '',
  subject: ['개발 동기', '관심사'],
  content: [sampleTexts.intro1, sampleTexts.intro2]
};

export const skills = {
  header: 'Skills',
  icon: [html, css, js, react, redux, node, mysql, python],
  subject: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Redux', 'NodeJS', 'MySQL', 'Python'],
  content: [sampleTexts.skills1, sampleTexts.skills2, sampleTexts.skills3,
    sampleTexts.skills4, sampleTexts.skills5, sampleTexts.skills6, sampleTexts.skills7, sampleTexts.skills8]
}