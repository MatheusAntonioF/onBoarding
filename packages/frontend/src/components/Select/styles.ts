import styled from 'styled-components';

interface ContainerProps {
  width: string;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 8px;
  width: ${props => props.width};

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.grafit.main};
    transition: 250ms ease;
  }

  div.custom__container {
    margin-top: 10px;
  }

  div.custom__value-container {
    font-size: 15px;
  }

  div.custom__control {
    border: 1px solid ${({ theme }) => theme.grafit.main};
    border-radius: 10px;

    height: 37px;
    width: 100%;
  }

  div.custom__control--is-focused {
    border: 0.1px solid ${({ theme }) => theme.primary.main};
  }

  div.custom__menu {
    padding: 10px;
  }

  div.custom__option {
    margin-bottom: 5px;
    height: 48px;
    border-radius: 5px;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.grafit.darker};

    &:last-child {
      margin-bottom: 0;
    }
  }

  div.custom__option:hover {
    background: ${props => props.theme.primary.main};
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  div.custom__option--is-focused {
    background: ${props => props.theme.primary.main};
    font-weight: bold;
    color: #fff;
  }

  div.custom__option--is-selected {
    background: ${props => props.theme.primary.main};
    font-weight: bold;
    color: #fff;
  }
`;
