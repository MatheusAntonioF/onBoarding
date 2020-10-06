import React, { useState, useCallback, FormEvent } from 'react';

import { Container, Title, Form } from './styles';

import YearExperienceStep from './YearExperienceStep';
import ListTechsStep from './ListTechsStep';

import Provider from './Provider';
import api from '../../../services/api';

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

interface Tech {
  name: string;
}

const MultiStepsForm: React.FC = () => {
  const [yearExperience, setYearExperience] = useState('0');

  const [techs, setTechs] = useState<Tech[]>([]);

  const [stepForm, setStepForm] = useState('yearExperience');

  const currentStep = defaultStepsForm[stepForm];

  const handleSetStepForm = useCallback((stepPositionForm: string) => {
    const newStep = defaultStepsForm[stepPositionForm].nameStep;

    setStepForm(newStep);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();

      await api.post(`profile/`);
    } catch (err) {
      console.log('');
    }
  };

  return (
    <Container>
      <Title>{currentStep.title}</Title>
      <Form onSubmit={handleSubmit}>
        <Provider
          value={{
            yearExperience,
            setYearExperience,
            techs,
            setTechs,
            handleSetStepForm,
          }}
        >
          {currentStep.component}
        </Provider>
      </Form>
    </Container>
  );
};

export default MultiStepsForm;
