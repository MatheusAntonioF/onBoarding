import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: auto;

  > label {
    color: ${({ theme }) => theme.text.main};

    transition: 200ms ease-out;
  }

  &:focus-within {
    > label {
      color: ${({ theme }) => theme.primary.main};
    }

    > input {
      border: 1px solid ${({ theme }) => theme.primary.main};
    }
  }
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.background.darker};

  padding: 0 10px;
  font-size: 1.2rem;

  border-radius: 0.5rem;

  transition: 200ms ease-out;
`;
