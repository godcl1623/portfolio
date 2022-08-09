import React from 'react';
/** @jsxImportSource @emotion/react */
import ReactMarkdown from 'react-markdown';

import { selectedHeader } from 'utils/customfunctions';
import { A } from 'styles/elementsPreset';
import TimerCarousel from 'components/carousel/TimerCarousel';
import {
  bodySectionContainerStyle,
  contentBoxStyle,
  linkBoxStyle,
  exampleImageStyle,
} from './styles/bodySectionStyle';

const BodySection = props => {
  const [linkLists, setLinkLists] = React.useState(['a']);

  const processedImgList = [
    props.images[props.images.length - 1],
    ...props.images,
    props.images[0]
  ];

  const imgArr = processedImgList.map((img, idx, arr) => (
    <img
      src={img}
      alt={`screenshot_${idx + 1}`}
      key={`screenshot_${idx + 1}`}
      css={exampleImageStyle(arr)}
    />
  ));

  const btnGenerator = (list, Comp) =>
    list.map((ele, idx) => (
      <Comp key={`link_${idx}`} href={ele.address} target="_blank" rel="noreferrer noopener">
        {ele.name}
      </Comp>
    ));

  React.useEffect(() => {
    if (props.links) {
      setLinkLists(props.links);
    }
  }, [props.links]);

  return (
    <div className={props.className} css={bodySectionContainerStyle}>
      {selectedHeader(props.header)}
      <TimerCarousel
        dataLength={imgArr.length}
        displayTgt={imgArr}
        mode="timer"
        options={{
          customSizes: {
            width: 28,
            height: 27
          },
          timer: 5
        }}
      />
      <div css={contentBoxStyle}>
        <ReactMarkdown children={props.comments} />
      </div>
      <div className="link-container" css={linkBoxStyle}>
        {btnGenerator(linkLists, A)}
      </div>
    </div>
  );
};

export default React.memo(BodySection);
