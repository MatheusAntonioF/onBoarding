import React from 'react';

import { ButtonComponent } from './styles';

import light from '../../styles/themes/light';

export interface IPropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: keyof typeof light;
  isActive?: boolean;
  fontSize?: number;
}

const Button: React.FC<IPropsButton> = ({
  color,
  isActive,
  fontSize,
  children,
  ...rest
}) => {
  return (
    <ButtonComponent
      color={color}
      isActive={isActive}
      fontSize={fontSize}
      {...rest}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
