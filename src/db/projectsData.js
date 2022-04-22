import project1 from './resources/project1';
import project2 from './resources/project2';
import project3 from './resources/project3';

const projectsData = {
  headers: [project1.header, project2.header, project3.header],
  images: {
    'clone-react-dnd': project1.images,
    'libmanage': project2.images,
    'portfolio': project3.images
  },
  icons: {
    'clone-react-dnd': project1.icons,
    'libmanage': project2.icons,
    'portfolio': project3.icons
  },
  comments: [project1.comment, project2.comment, project3.comment],
  preview: [project1.images[0], project2.images[0], project3.images[0]]
}

export default projectsData;