//  lists of components(컴포넌트 목록)
import About from '../components/about/About';
import Main from '../components/core/Main';
import Works from '../components/works/Works';
import Common from '../components/utils/Common';
import Modal from '../components/modal/Modal';
import Moveto from '../components/utils/Moveto';
import FormErrorMsg from '../components/modal/contact/form/FormErrorMsg';
import FormLayout from '../components/modal/contact/form/FormLayout';
import FormLogic from '../components/modal/contact/form/FormLogic';
import BodySection from '../components/modal/projects/layouts/BodySection';
import PageBtn from '../components/modal/projects/layouts/PageBtn';
import Projects from '../components/modal/projects/Projects';
import GenContent from '../components/utils/GenContent';
import GenSection from '../components/utils/GenSection';

// object init for export(내보내기용 객체 정의)
const lists = {
  About, Main, Works, Common
};

export default lists;
