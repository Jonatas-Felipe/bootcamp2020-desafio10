import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import api from '~/services/api';

import Background from '~/components/Background';
import { Container, TextArea, SubmitButton, TextButton } from './styles';

export default function InformarProblema() {
  const route = useRoute();
  const navigation = useNavigation();

  const [description, setDescription] = useState('');

  const { id } = route.params;

  async function handleSubmit() {
    try {
      await api.post(`delivery/${id}/problems`, { description });
      setDescription('');
      navigation.goBack();
    } catch (err) {
      const { response } = err;
      const error =
        response.status === '500'
          ? err.response.data.error
          : 'Verifique sua conexão com a internet';

      Alert.alert('Erro ao registrar problema', error);
    }
  }

  return (
    <Background>
      <Container>
        <ScrollView>
          <TextArea
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            value={description}
            onChangeText={setDescription}
          />
          <SubmitButton onPress={handleSubmit}>
            <TextButton>Enviar</TextButton>
          </SubmitButton>
        </ScrollView>
      </Container>
    </Background>
  );
}
