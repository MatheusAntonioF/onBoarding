import React from 'react';

import { Container } from './styles';

import MultiStepsForm from './MultiStepsForm';

const Profile: React.FC = () => {
  return (
    <Container>
      <h1>Crie seu perfil</h1>
      <MultiStepsForm />
    </Container>
  );
};

export default Profile;
