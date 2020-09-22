import React, { useState } from 'react';

import { Container, Title, Form } from './styles';

import YearExperienceStep from './YearExperienceStep';
import ListTechsStep from './ListTechsStep';

import Provider from './Provider';

interface DefaultStepProps {
  [key: string]: {
    component: JSX.Element;
    nameStep: string;
    title: string;
  };
}

const defaultStepsForm: DefaultStepProps = {
  yearExperience: {
    component: <YearExperienceStep />,
    nameStep: 'yearExperience',
    title: 'Anos de experiência',
  },
  listTechs: {
    component: <ListTechsStep />,
    nameStep: 'listTechs',
    title: 'Tecnologias Usadas',
  },
};

const MultiStepsForm: React.FC = () => {
  const [stepForm, setStepForm] = useState('yearExperience');

  const currentStep = defaultStepsForm[stepForm];

  const handleSetStepForm = (stepPositionForm: string) => {
    const newStep = defaultStepsForm[stepPositionForm].nameStep;

    setStepForm(newStep);
  };

  return (
    <Container>
      <Title>{currentStep.title}</Title>
      <Form>
        <Provider value={{ handleSetStepForm }}>
          {currentStep.component}
        </Provider>
      </Form>
    </Container>
  );
};

export default MultiStepsForm;
