import React, { useContext } from 'react';

// import { Container } from './styles';

import { MultiStepsContext } from '../Provider';
import Button from '../../../../components/Button';

const YearExperienceStep: React.FC = () => {
  const { handleSetStepForm } = useContext(MultiStepsContext);

  return (
    <>
      <Button color="primary" onClick={() => handleSetStepForm('listTechs')}>
        Próximo
      </Button>
    </>
  );
};

export default YearExperienceStep;
