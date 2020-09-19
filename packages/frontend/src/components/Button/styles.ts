import styled, { css } from 'styled-components';

import { IPropsButton } from './index';

const activeButton = css<IPropsButton>`
  border: 2px solid ${({ theme, color }) => theme[color].main};

  padding: 5px 8px;

  border-radius: 5px;
`;

export const ButtonComponent = styled.button<IPropsButton>`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.background.main};

  background: ${({ theme }) => theme.primary.main};

  font-size: ${props => props.fontSize || '16'}px;

  text-transform: uppercase;

  padding: 8px 12px;

  border-radius: 0.3rem;

  transition: 200ms ease;

  cursor: pointer;

  ${({ isActive }) => isActive && activeButton};

  &:hover {
    opacity: 0.8;
  }
`;
