import React, { useContext } from 'react';

// import { Container } from './styles';

import { MultiStepsContext } from '../Provider';
import Button from '../../../../components/Button';

const ListTechsStep: React.FC = () => {
  const { handleSetStepForm } = useContext(MultiStepsContext);

  return (
    <>
      <Button
        color="primary"
        onClick={() => handleSetStepForm('yearExperience')}
      >
        Anterior
      </Button>
    </>
  );
};

export default ListTechsStep;
