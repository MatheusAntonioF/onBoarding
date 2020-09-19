import React from 'react';

import { FormComponent } from './styles';

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  legend?: string;
}

const Form: React.FC<IProps> = ({ children, legend, ...rest }) => {
  return (
    <FormComponent {...rest}>
      {legend && <legend>{legend}</legend>}
      {children}
    </FormComponent>
  );
};

export default Form;
