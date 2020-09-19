import React, { useState, FormEvent } from 'react';

import { toast } from 'react-toastify';

import { Container } from './styles';

import Form from '../../components/Form';
import Input from '../../components/Form/Input';
import Button from '../../components/Button';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({} as FormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
    } catch (err) {
      toast.error('Falha ao fazer login! Verifique os dados e tente novamente');
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input label="Email" name="email" onChange={handleChange} />
        <Input label="Senha" name="password" onChange={handleChange} />
        <div className="group">
          <Button type="submit" color="primary">
            Entrar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default SignIn;
