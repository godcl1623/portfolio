import React from 'react';
import BodySection from 'components/modal/projects/layouts/BodySection';

export default function CarouselItems({ processedData, projectsData }) {
  const { images, comments, links, headers: subject } = projectsData;

  return processedData.map((sub, idx) => {
    const originalIdx = subject.indexOf(sub);
    return (
      <React.Fragment key={`carousel_item_${idx}`}>
        <BodySection
          header={sub}
          images={images[sub]}
          comments={comments[originalIdx]}
          links={links[originalIdx]}
          className={`Project${originalIdx + 1}`}
        />
      </React.Fragment>
    );
  });
}