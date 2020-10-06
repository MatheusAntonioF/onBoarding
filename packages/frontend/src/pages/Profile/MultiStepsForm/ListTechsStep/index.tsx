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
  const [techsApi, setTechsApi] = useState<TechDTO[]>([]);

  const { techs, setTechs, handleSetStepForm } = useContext(MultiStepsContext);

  useEffect(() => {
    async function loadTechs() {
      const { data } = await api.get('/tech');

      setTechsApi(data);
    }

    loadTechs();
  }, []);

  const handleSelectTech = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = target;

    const techFinded = techs.find(tech => tech.name === name);

    if (techFinded) {
      return setTechs(
        techs.filter(tech => {
          if (tech.name !== name) return tech;
        })
      );
    }

    return setTechs([...techs, { name }]);
  };

  return (
    <>
      <Container>
        {techsApi.map(tech => (
          <Input
            key={tech.id}
            type="checkbox"
            label={tech.name}
            name={tech.name}
            onChange={handleSelectTech}
          />
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
