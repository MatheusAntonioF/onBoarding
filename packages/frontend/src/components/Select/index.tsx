import React from 'react';

import Select, { Props as SelectProps, OptionTypeBase } from 'react-select';

import { Container } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  width?: string;
  label: string;
}

const SelectComponent: React.FC<Props> = ({
  width = '100%',
  label,
  ...rest
}) => {
  return (
    <Container width={width}>
      {label && <label className={`${rest.className}`}>{label}</label>}
      <Select
        className="custom__container"
        classNamePrefix="custom"
        {...rest}
      />
    </Container>
  );
};

export default SelectComponent;
