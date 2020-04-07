import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '~/services/api';

import Background from '~/components/Background';

import {
  Container,
  ContentCamera,
  Camera,
  SubmitButton,
  TextButton,
} from './styles';

export default function ConfirmarEntrega() {
  const navigation = useNavigation();
  const route = useRoute();

  const [assinatura, setAssinatura] = useState('');

  const { id } = route.params;

  function dataFoto(dataImage) {
    setAssinatura(dataImage);
  }

  async function handleSubmit() {
    const imagesData = {
      originalname: 'teste.jpg',
      filename: 'teste.jpg',
      signatureBase64: assinatura,
    };
    try {
      const responseSignature = await api.post('signature', imagesData);
      const signature_id = responseSignature.data.id;

      const data = {
        date: new Date().getTime(),
        signature_id,
      };
      try {
        await api.post(`finalizar/${id}`, data);
        navigation.goBack();
      } catch (err) {
        const { response } = err;
        const error =
          response.status === '500'
            ? err.response.data.error
            : 'Verifique sua conexão com a internet';

        Alert.alert('Erro ao salvar assinatura', error);
      }
    } catch (err) {
      const { response } = err;
      const error =
        response.status === '500'
          ? err.response.data.error
          : 'Verifique sua conexão com a internet';

      Alert.alert('Erro ao salvar assinatura', error);
    }
  }

  return (
    <Background>
      <Container>
        <ScrollView>
          <ContentCamera>
            <Camera dataFoto={dataFoto} />
          </ContentCamera>
          {!!assinatura && (
            <SubmitButton onPress={handleSubmit}>
              <TextButton>Enviar</TextButton>
            </SubmitButton>
          )}
        </ScrollView>
      </Container>
    </Background>
  );
}
