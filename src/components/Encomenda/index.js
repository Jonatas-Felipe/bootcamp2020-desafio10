import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';

import {
  Container,
  TituloEncomenda,
  TextTitulo,
  Timeline,
  TimelineContentCircle,
  Circle,
  TimelineContentInfo,
  InfoTimeLine,
  Line,
  Content,
  InfoEncomenda,
  InfoTitle,
  InfoText,
  DetalhesEncomenda,
} from './styles';

export default function Encomenda({ data, onPress }) {
  let status;
  status = !data.start_date && !data.canceled_at ? 'retirada' : false;

  status = !status && data.end_date ? 'entregue' : status;

  if (data.start_date && !data.end_date && !data.canceled_at) {
    status = 'pendente';
  }

  return (
    <Container>
      <TituloEncomenda>
        <Icon name="truck" size={30} color="#7159c1" />
        <TextTitulo>{data.product}</TextTitulo>
      </TituloEncomenda>

      <Timeline>
        <TimelineContentCircle>
          <Circle
            aguardando={
              status === 'retirada' ||
              status === 'pendente' ||
              status === 'entregue'
            }
          />
          <Circle retirada={status === 'pendente' || status === 'entregue'} />
          <Circle entregue={status === 'entregue'} />
          <Line />
        </TimelineContentCircle>
        <TimelineContentInfo>
          <InfoTimeLine>Aguardando Retirada</InfoTimeLine>
          <InfoTimeLine>Retirada</InfoTimeLine>
          <InfoTimeLine>Entregue</InfoTimeLine>
        </TimelineContentInfo>
      </Timeline>

      <Content>
        <InfoEncomenda>
          <InfoTitle>Data</InfoTitle>
          <InfoText>{format(parseISO(data.created_at), 'dd/MM/yyyy')}</InfoText>
        </InfoEncomenda>

        <InfoEncomenda>
          <InfoTitle>Cidade</InfoTitle>
          <InfoText>{data.recipient.city}</InfoText>
        </InfoEncomenda>

        <InfoEncomenda>
          <TouchableOpacity onPress={onPress}>
            <DetalhesEncomenda>Ver Detalhes</DetalhesEncomenda>
          </TouchableOpacity>
        </InfoEncomenda>
      </Content>
    </Container>
  );
}

Encomenda.propTypes = {
  data: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};
