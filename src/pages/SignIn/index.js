import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import Logo from '~/assets/logo.png';

import {
  Background,
  Container,
  Image,
  Form,
  Input,
  SubmitButton,
  TextButton,
} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  const [id, setId] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Background>
      <Container>
        <Image source={Logo} />
        <Form>
          <Input
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={id}
            onChangeText={setId}
          />
          <SubmitButton enabled={!loading} onPress={handleSubmit}>
            {!loading ? (
              <TextButton>Entrar no sistema</TextButton>
            ) : (
              <ActivityIndicator size={30} color="#fff" />
            )}
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
