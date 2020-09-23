import React from 'react';

import { Container, InputComponent } from './styles';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<IProps> = ({ label, ...rest }) => {
  return (
    <Container>
      {label && <label>{label}</label>}
      <InputComponent {...rest} />
    </Container>
  );
};

export default Input;
