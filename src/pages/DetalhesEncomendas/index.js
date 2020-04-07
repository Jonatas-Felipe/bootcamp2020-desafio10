import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import {
  useRoute,
  useNavigation,
  useIsFocused,
} from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import Background from '~/components/Background';
import Loading from '~/components/Loading';

import {
  Container,
  Content,
  TitleBox,
  TextTitleBox,
  ContentBox,
  SubTitleBox,
  InfoBox,
  DateContent,
  ContentOption,
  Option,
  TextOption,
} from './styles';

export default function Encomendas() {
  const route = useRoute();
  const navigation = useNavigation();
  const IsFocused = useIsFocused();

  const [encomenda, setEncomenda] = useState([]);
  const [retirado, setRetirado] = useState(false);
  const [loading, setLoading] = useState(true);

  const deliveryman_id = useSelector((state) => state.auth.entregador.id);

  const { id } = route.params;

  function checkRetirado(encomendaSelecionada) {
    const retirada = !!(
      encomendaSelecionada.start_date &&
      !encomendaSelecionada.end_date &&
      !encomendaSelecionada.canceled_at
    );
    setRetirado(retirada);
  }

  async function loadEncomenda() {
    try {
      const response = await api.get(`entrega/${id}`);
      setEncomenda(response.data);
      setLoading(false);
      checkRetirado(response.data);
    } catch (err) {
      const { response } = err;
      const error =
        response.status === '500'
          ? err.response.data.error
          : 'Verifique sua conexão com a internet';

      Alert.alert('Erro inesperado', error, [
        {
          text: 'Ok',
          onPress: () => navigation.goBack(),
        },
      ]);
    }
  }

  useEffect(() => {
    if (IsFocused) {
      loadEncomenda();
    }
  }, [IsFocused]);

  let status;
  status =
    !encomenda.start_date && !encomenda.canceled_at
      ? 'Aguardando retirada'
      : false;

  status = !status && encomenda.end_date ? 'Entregue' : status;

  if (encomenda.start_date && !encomenda.end_date && !encomenda.canceled_at) {
    status = 'Pendente';
  }

  function handleInformarProblema() {
    navigation.navigate('Encomenda', {
      screen: 'InformarProblema',
      params: { id },
    });
  }

  function handleVisualizarProblemas(product) {
    navigation.navigate('Encomenda', {
      screen: 'VisualizarProblemas',
      params: { id, product },
    });
  }

  async function handleRetirarEncomenda() {
    const data = {
      deliveryman_id,
      date: new Date().getTime(),
    };

    await api.post(`retirada/${id}`, data);

    loadEncomenda();
  }

  function handleConfirmarEntrega(product) {
    navigation.navigate('Encomenda', {
      screen: 'ConfirmarEntrega',
      params: { id, product },
    });
  }

  return (
    <Background>
      <Container>
        {!loading ? (
          <ScrollView>
            <Content>
              <TitleBox>
                <Icon name="truck" size={30} color="#7159c1" />
                <TextTitleBox>Informações da entrega</TextTitleBox>
              </TitleBox>

              <ContentBox>
                <SubTitleBox>DESTINATÁRIO</SubTitleBox>
                <InfoBox>{encomenda.recipient.recipient_name}</InfoBox>
              </ContentBox>

              <ContentBox>
                <SubTitleBox>ENDEREÇO DE ENTREGA</SubTitleBox>
                <InfoBox>
                  {encomenda.recipient.street}, {encomenda.recipient.number},{' '}
                  {encomenda.recipient.city} - {encomenda.recipient.state},{' '}
                  {encomenda.recipient.zipcode}
                </InfoBox>
              </ContentBox>

              <ContentBox>
                <SubTitleBox>PRODUTO</SubTitleBox>
                <InfoBox>{encomenda.product}</InfoBox>
              </ContentBox>
            </Content>

            <Content>
              <TitleBox>
                <Icon name="calendar" size={30} color="#7159c1" />
                <TextTitleBox>Situação da entrega</TextTitleBox>
              </TitleBox>

              <ContentBox>
                <SubTitleBox>STATUS</SubTitleBox>
                <InfoBox>{status}</InfoBox>
              </ContentBox>

              <DateContent>
                <ContentBox>
                  <SubTitleBox>DATA DE RETIRADA</SubTitleBox>
                  <InfoBox>
                    {encomenda.start_date
                      ? format(parseISO(encomenda.start_date), 'dd/MM/yyyy')
                      : '__/__/____'}
                  </InfoBox>
                </ContentBox>

                <ContentBox>
                  <SubTitleBox>DATA DE ENTREGA</SubTitleBox>
                  <InfoBox>
                    {encomenda.end_date
                      ? format(parseISO(encomenda.start_date), 'dd/MM/yyyy')
                      : '__/__/____'}
                  </InfoBox>
                </ContentBox>
              </DateContent>
            </Content>

            {status !== 'Entregue' && (
              <ContentOption>
                <Option onPress={handleInformarProblema} first>
                  <Icon name="close-circle-outline" size={30} color="#E74040" />
                  <TextOption>Informar Problema</TextOption>
                </Option>

                <Option
                  onPress={() => handleVisualizarProblemas(encomenda.product)}
                >
                  <Icon name="information-outline" size={30} color="#E7BA40" />
                  <TextOption>Visualizar Problemas</TextOption>
                </Option>
                {retirado ? (
                  <Option onPress={handleConfirmarEntrega}>
                    <Icon
                      name="check-circle-outline"
                      size={30}
                      color="#7159c1"
                    />
                    <TextOption>Confirmar Entrega</TextOption>
                  </Option>
                ) : (
                  <Option onPress={handleRetirarEncomenda}>
                    <Icon
                      name="arrow-down-circle-outline"
                      size={30}
                      color="#7159c1"
                    />
                    <TextOption>Retirar Encomenda</TextOption>
                  </Option>
                )}
              </ContentOption>
            )}
          </ScrollView>
        ) : (
          <Loading />
        )}
      </Container>
    </Background>
  );
}
