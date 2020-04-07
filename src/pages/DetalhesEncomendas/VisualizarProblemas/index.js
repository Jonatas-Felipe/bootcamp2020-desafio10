import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import Background from '~/components/Background';
import {
  Container,
  Encomenda,
  ListProblemas,
  Content,
  Problema,
  DataProblema,
} from './styles';

export default function VisualizarProblemas() {
  const route = useRoute();
  const [problemas, setProblemas] = useState([]);

  const { id, product } = route.params;

  useEffect(() => {
    async function loadProblemas() {
      try {
        const response = await api.get(`delivery/${id}/problems`);
        setProblemas(response.data);
      } catch (err) {
        const { response } = err;
        const error =
          response.status === '500'
            ? err.response.data.error
            : 'Verifique sua conexão com a internet';

        Alert.alert('Erro ao listar problemas', error, [
          {
            text: 'Ok',
            onPress: () => navigation.goBack(),
          },
        ]);
      }
    }
    loadProblemas();
  }, [id]);

  return (
    <Background>
      <Container>
        <Encomenda>{product}</Encomenda>
        <ListProblemas
          data={problemas}
          keyExtractor={(problema) => String(problema.id)}
          renderItem={({ item: problema }) => (
            <Content>
              <Problema>{problema.description}</Problema>
              <DataProblema>
                {format(parseISO(problema.createdAt), 'dd/MM/yyyy')}
              </DataProblema>
            </Content>
          )}
        />
      </Container>
    </Background>
  );
}
