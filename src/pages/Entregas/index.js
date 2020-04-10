import React, { useState, useEffect, useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { TouchableOpacity, Alert } from 'react-native';

import { signOut } from '~/store/modules/auth/actions';

import api from '~/services/api';

import Encomenda from '~/components/Encomenda';
import Loading from '~/components/Loading';

import {
  Container,
  DadosEntregador,
  Entregador,
  Avatar,
  ButtonGroup,
  ButtonAction,
  InfoEntregador,
  Text,
  Nome,
  Content,
  TituloMenu,
  Titulo,
  Menu,
  MenuText,
  ListEncomendas,
  EmptyContent,
  EmptyText,
} from './styles';

export default function Entregas() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const entregador = useSelector((state) => state.auth.entregador);

  const [encomendas, setEncomendas] = useState([]);
  const [statusMenu, setStatusMenu] = useState(false);
  const [connected, setConnected] = useState(true);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  async function loadEncomendas(filtro, pagina, oldEncomendas = []) {
    try {
      const response = await api.get(`entregas/${entregador.id}`, {
        params: {
          status: filtro,
          page: pagina,
        },
      });

      setEncomendas([...oldEncomendas, ...response.data]);
      setLoading(false);
      setRefreshing(false);
      setConnected(true);
    } catch (err) {
      const { response } = err;
      if (response.status === 500) {
        setConnected(false);
      } else {
        const { error } = err.response.data;
        Alert.alert('Erro inesperado', error);
      }
    }
  }

  async function checkNotifications() {
    const response = await api.get(`notifications/${entregador.id}`);
    const unRead = !!response.data.find(
      (notification) => notification.read === false
    );
    setHasUnread(unRead);
  }

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      checkNotifications();
      setStatusMenu(false);
      loadEncomendas('', page);
    }
  }, [isFocused]);

  function handleChangeStatus(filtro) {
    setConnected(true);
    setLoading(true);
    setPage(1);
    loadEncomendas(filtro, 1);
    setStatus(filtro);
    setStatusMenu(filtro === 'Entregue');
  }

  function handleLogout() {
    dispatch(signOut());
  }

  function handleNotification(user_id) {
    navigation.navigate('Encomenda', {
      screen: 'Notificacoes',
      params: { user_id },
    });
  }

  function handlePress(id) {
    navigation.navigate('Encomenda', {
      screen: 'DetalhesEncomenda',
      params: { id },
    });
  }

  function refreshList() {
    setRefreshing(true);
    loadEncomendas('', 1);
  }

  function loadMore() {
    const nextPage = page + 1;
    loadEncomendas(status, nextPage, encomendas);
    setPage(nextPage);
  }

  return (
    <Container>
      <DadosEntregador>
        <Entregador>
          <Avatar
            source={{
              uri: entregador.avatar
                ? entregador.avatar.url
                : `https://api.adorable.io/avatar/50/${entregador.name}.png`,
            }}
          />
          <InfoEntregador>
            <Text>Bem vindo de volta,</Text>
            <Nome>{entregador.name}</Nome>
          </InfoEntregador>
        </Entregador>

        <ButtonGroup>
          <ButtonAction onPress={() => handleNotification(entregador.id)}>
            <Icon
              name={hasUnread ? 'bell-ring' : 'bell-ring-outline'}
              size={30}
              color="#7159c1"
            />
          </ButtonAction>
          <ButtonAction onPress={handleLogout}>
            <Icon name="exit-to-app" size={30} color="#E74040" />
          </ButtonAction>
        </ButtonGroup>
      </DadosEntregador>
      <Content>
        <TituloMenu>
          <Titulo>Entregas</Titulo>
          <Menu>
            <TouchableOpacity onPress={() => handleChangeStatus('')}>
              <MenuText active={!statusMenu}>Pendentes</MenuText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChangeStatus('Entregue')}>
              <MenuText active={statusMenu}>Entregues</MenuText>
            </TouchableOpacity>
          </Menu>
        </TituloMenu>
        {connected ? (
          <>
            {!loading ? (
              <>
                {encomendas.length ? (
                  <>
                    <ListEncomendas
                      onRefresh={refreshList}
                      refreshing={refreshing}
                      onEndReachedThreshold={0.2}
                      onEndReached={loadMore}
                      data={encomendas}
                      keyExtractor={(encomenda) => String(encomenda.id)}
                      renderItem={({ item: encomenda }) => (
                        <Encomenda
                          onPress={() => handlePress(encomenda.id)}
                          data={encomenda}
                        />
                      )}
                    />
                  </>
                ) : (
                  <EmptyContent>
                    <Icon name="dropbox" size={60} color="#ccc" />
                    <EmptyText>Nenhuma encomenda encontrada</EmptyText>
                  </EmptyContent>
                )}
              </>
            ) : (
              <Loading />
            )}
          </>
        ) : (
          <EmptyContent>
            <Icon name="signal-off" size={60} color="#ccc" />
            <EmptyText>Sem conexão com a internet</EmptyText>
          </EmptyContent>
        )}
      </Content>
    </Container>
  );
}
