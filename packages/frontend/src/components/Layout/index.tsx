import React from 'react';

import {
  Container,
  WrapperHeader,
  Header,
  Title,
  Main,
  Content,
} from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <WrapperHeader>
        <Header>
          <Title>
            On
            <span>Boarding</span>
          </Title>
        </Header>
      </WrapperHeader>
      <Main>
        <Content>{children}</Content>
      </Main>
    </Container>
  );
};

export default Layout;
