import React, { useContext, useCallback } from 'react';

import { ValueType, OptionTypeBase } from 'react-select';
import { MultiStepsContext } from '../Provider';

import Button from '../../../../components/Button';
import Select from '../../../../components/Select';

const YearExperienceStep: React.FC = () => {
  const { yearExperience, setYearExperience, handleSetStepForm } = useContext(
    MultiStepsContext
  );

  const defaultOptions = useCallback(() => {
    let index = 1;

    const defOptions = [];

    while (index <= 40) {
      defOptions.push({
        label: index,
        value: index,
      });
      index++;
    }

    return defOptions;
  }, []);

  return (
    <>
      <Select
        label="Anos de experiência"
        placeholder="Selecione uma opção..."
        options={defaultOptions()}
        defaultValue={{ value: yearExperience, label: yearExperience }}
        name="yearExperience"
        onChange={(selectedOption: ValueType<OptionTypeBase>) => {
          const { value } = selectedOption as OptionTypeBase;
          setYearExperience(value);
        }}
      />
      <div className="group">
        <Button color="primary" onClick={() => handleSetStepForm('listTechs')}>
          Próximo
        </Button>
      </div>
    </>
  );
};

export default YearExperienceStep;
