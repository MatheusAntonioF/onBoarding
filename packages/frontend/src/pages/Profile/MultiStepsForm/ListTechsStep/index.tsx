import React, { useState, useEffect, useContext } from 'react';

import { Container } from './styles';

import { MultiStepsContext } from '../Provider';

import Button from '../../../../components/Button';
import Input from '../../../../components/Form/Input';

import api from '../../../../services/api';

interface TechDTO {
  id: string;
  name: string;
  createdAt: Date;
}

const ListTechsStep: React.FC = () => {
  const [techs, setTechs] = useState<TechDTO[]>([]);

  const { handleSetStepForm } = useContext(MultiStepsContext);

  useEffect(() => {
    async function loadTechs() {
      const { data } = await api.get('/tech');

      setTechs(data);
    }

    loadTechs();
  }, []);

  return (
    <>
      <Container>
        {techs.map(tech => (
          <Input key={tech.id} type="checkbox" label={tech.name} />
        ))}
      </Container>
      <div className="group">
        <Button
          color="grafit"
          onClick={() => handleSetStepForm('yearExperience')}
        >
          Anterior
        </Button>
        <Button color="primary">Finalizar</Button>
      </div>
    </>
  );
};

export default ListTechsStep;
