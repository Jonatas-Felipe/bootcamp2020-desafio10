import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Content,
  Avatar,
  EntregadorInfoGroup,
  Label,
  Info,
  LogoutButton,
  TextButton,
} from './styles';

export default function MeuPerfil() {
  const dispatch = useDispatch();
  const entregador = useSelector((state) => state.auth.entregador);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Avatar
          source={{
            uri: entregador.avatar
              ? entregador.avatar.url
              : `https://api.adorable.io/avatar/136/${entregador.name}.png`,
          }}
        />
        <EntregadorInfoGroup>
          <Label>Nome completo</Label>
          <Info>{entregador.name}</Info>
        </EntregadorInfoGroup>
        <EntregadorInfoGroup>
          <Label>Email</Label>
          <Info>{entregador.email}</Info>
        </EntregadorInfoGroup>
        <EntregadorInfoGroup>
          <Label>Data de cadastro</Label>
          <Info>{format(parseISO(entregador.createdAt), 'dd/MM/yyyy')}</Info>
        </EntregadorInfoGroup>
        <LogoutButton onPress={handleLogout}>
          <TextButton>Logout</TextButton>
        </LogoutButton>
      </Content>
    </Container>
  );
}
