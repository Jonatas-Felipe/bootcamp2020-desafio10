import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import {
  Container,
  ListNotificacoes,
  Content,
  Notificacao,
  DataNotificacao,
} from './styles';

import Background from '~/components/Background';
import Loading from '~/components/Loading';

export default function Notificacoes() {
  const route = useRoute();
  const { user_id } = route.params;

  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get(`/notifications/${user_id}`);
      setNotificacoes(response.data);
    }

    loadNotifications();
  }, [user_id]);

  useEffect(() => {
    async function changeReadNotifications(id) {
      await api.put(`/notifications/${id}`);
    }

    notificacoes.map((notificacao) => changeReadNotifications(notificacao._id));
  }, [notificacoes]);

  return (
    <Background>
      <Container>
        <ListNotificacoes
          data={notificacoes}
          keyExtractor={(notificacao) => String(notificacao._id)}
          renderItem={({ item: notificacao }) => (
            <Content read={notificacao.read}>
              <Notificacao>{notificacao.content}</Notificacao>
              <DataNotificacao>
                {format(parseISO(notificacao.createdAt), 'dd/MM/yyyy')}
              </DataNotificacao>
            </Content>
          )}
        />
      </Container>
    </Background>
  );
}
