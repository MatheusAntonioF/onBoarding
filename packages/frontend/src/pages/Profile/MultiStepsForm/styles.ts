import styled from 'styled-components';

import FormComponent from '../../../components/Form';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 80%;
`;

export const Title = styled.h2`
  margin-top: 10%;

  color: ${({ theme }) => theme.primary.main};
`;

export const Form = styled(FormComponent)`
  margin-top: 10px;

  width: 100%;
`;
