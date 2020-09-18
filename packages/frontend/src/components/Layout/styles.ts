import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const WrapperHeader = styled.nav`
  display: flex;
  align-items: center;

  width: 100%;
  height: 6%;

  background: ${({ theme }) => theme.background.darker};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  max-width: 1100px;
  width: 1100px;
  height: 100%;

  padding: 0 15px;

  margin: 0 auto;
`;

export const Title = styled.h1`
  > span {
    color: ${({ theme }) => theme.primary.main};
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 94%;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  width: 40%;
  height: 100%;

  padding: 20px 25px;
`;
