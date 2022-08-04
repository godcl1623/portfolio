import React from 'react';

const useInitializeProjectIndex = (selectedProjectIdx, projectsList) => {
  const [localProjectIndex, setLocalIndex] = React.useState(0);

  React.useEffect(() => {
    if (selectedProjectIdx > projectsList.length + 2 - 3) {
      setLocalIndex(0);
    } else if (selectedProjectIdx < 0) {
      setLocalIndex(projectsList.length + 2 - 3);
    } else {
      setLocalIndex(selectedProjectIdx);
    }
  }, [selectedProjectIdx, projectsList.length, setLocalIndex]);

  return { localProjectIndex };
};

export default useInitializeProjectIndex;
