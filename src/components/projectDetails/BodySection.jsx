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

  const processedImagesList = [
    props.images[props.images.length - 1],
    ...props.images,
    props.images[0]
  ];

  const imagesArray = processedImagesList.map((processedImage, index, arraySelf) => (
    <img
      src={processedImage}
      alt={`screenshot_${index + 1}`}
      key={`screenshot_${index + 1}`}
      css={exampleImageStyle(arraySelf)}
    />
  ));

  const buttonsGenerator = (listItems, ComponentToDisplay) =>
    listItems.map((listItem, index) => (
      <ComponentToDisplay key={`link_${index}`} href={listItem.address} target="_blank" rel="noreferrer noopener">
        {listItem.name}
      </ComponentToDisplay>
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
        dataLength={imagesArray.length}
        displayTgt={imagesArray}
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
        {buttonsGenerator(linkLists, A)}
      </div>
    </div>
  );
};

export default React.memo(BodySection);
