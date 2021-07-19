//  lists of components(컴포넌트 목록)
import About from '../src/components/about/About';
import Main from '../src/components/core/Main';
import Works from '../src/components/works/Works';
import Common from '../src/components/utils/Common';
import Modal from '../src/components/modal/Modal';
import Moveto from '../src/components/utils/Moveto';
import BodySection from '../src/components/modal/projects/layouts/BodySection';
import PageBtn from '../src/components/modal/projects/layouts/PageBtn';
import Projects from '../src/components/modal/projects/Projects';
import GenContent from '../src/components/utils/GenContent';
import GenSection from '../src/components/utils/GenSection';

// object init for export(내보내기용 객체 정의)
const lists = {
  About, Main, Works, Common, Modal,
  Moveto, BodySection,
  PageBtn, Projects, GenContent, GenSection
};

export default lists;
