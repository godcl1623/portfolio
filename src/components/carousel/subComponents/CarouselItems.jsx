import React from 'react';
import BodySection from 'components/projectDetails/BodySection';

export default function CarouselItems({ processedData, projectsData }) {
  const { images, comments, links, headers: subject } = projectsData;

  return processedData.map((dataSubject, index) => {
    const originalIndex = subject.indexOf(dataSubject);
    return (
      <React.Fragment key={`carousel_item_${index}`}>
        <BodySection
          header={dataSubject}
          images={images[dataSubject]}
          comments={comments[originalIndex]}
          links={links[originalIndex]}
          className={`Project${originalIndex + 1}`}
        />
      </React.Fragment>
    );
  });
}