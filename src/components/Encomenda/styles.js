import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1 auto;
  margin: 15px 0;
  border: 1px solid #0000000f;
  border-radius: 10px;
`;

export const TituloEncomenda = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  padding: 15px;
`;

export const TextTitulo = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #7159c1;
`;

export const Timeline = styled.View`
  flex: 1;
  margin: 25px 30px;
`;

export const TimelineContentCircle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 15%;
  position: relative;
`;

export const TimelineContentInfo = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Circle = styled.View`
  width: 9px;
  height: 9px;
  border: 1px solid #7159c1;
  border-radius: 5.5px;
  background: ${(props) =>
    props.aguardando || props.retirada || props.entregue ? '#7159c1' : '#fff'};
`;

export const InfoTimeLine = styled.Text`
  width: 60px;
  text-align: center;
  font-size: 10px;
  color: #999999;
  margin-top: 5px;
`;

export const Line = styled.View`
  position: absolute;
  border: 1px solid #7159c1;
  top: 3px;
  width: 99%;
  height: 1px;
  background: #7159c1;
  z-index: -1;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #f8f9fd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px 0;
`;

export const InfoEncomenda = styled.View`
  padding: 0 20px;
`;

export const InfoTitle = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #999;
`;

export const InfoText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444;
`;

export const DetalhesEncomenda = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7159c1;
`;
