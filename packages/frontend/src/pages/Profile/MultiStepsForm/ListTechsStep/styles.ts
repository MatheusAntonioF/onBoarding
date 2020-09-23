import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, 100px);

  width: 100%;

  gap: 15px;

  > div {
    align-items: center;

    max-width: 100px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    input {
      width: 20px;
      height: 20px;
    }
  }
`;
