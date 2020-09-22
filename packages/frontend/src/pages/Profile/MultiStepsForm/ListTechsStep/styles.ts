import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  width: 100%;

  > div.div-input {
    align-items: center;

    max-width: 100px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    margin-top: 10px;
  }
`;
