import React from 'react';

const useInitializeProjectIndex = (selectedProjectIndex, projectsList) => {
  const [localProjectIndex, setLocalIndex] = React.useState(0);

  React.useEffect(() => {
    if (selectedProjectIndex > projectsList.length + 2 - 3) {
      setLocalIndex(0);
    } else if (selectedProjectIndex < 0) {
      setLocalIndex(projectsList.length + 2 - 3);
    } else {
      setLocalIndex(selectedProjectIndex);
    }
  }, [selectedProjectIndex, projectsList.length, setLocalIndex]);

  return { localProjectIndex };
};

export default useInitializeProjectIndex;
