import styled from 'styled-components';

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 350px;
  min-height: 25px;

  > div + div {
    margin-top: 15px;
  }

  > legend {
    font-weight: bold;
    font-size: 1.6rem;
  }

  div.group {
    margin-top: 25px;
    display: flex;
    justify-content: space-evenly;

    width: 100%;
  }
`;
