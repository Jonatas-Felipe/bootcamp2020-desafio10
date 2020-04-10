import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  padding: 20px;
`;

export const Encomenda = styled.Text`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
`;

export const ListNotificacoes = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 13px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  background: ${(props) => (props.read ? 'rgba(255,255,255,0.9)' : '#fff')};
  border-radius: 4px;
  margin: 7px 0;
  border: 1px solid
    ${(props) => (props.read ? 'rgba(0, 0, 0, 0.1);' : 'rgba(0, 255, 0, 0.5)')};
`;

export const Notificacao = styled.Text`
  width: 80%;
  color: #999;
  font-size: 16px;
`;

export const DataNotificacao = styled.Text`
  margin-left: 5px;
  color: #c1c1c1;
  font-size: 12px;
  text-align: right;
`;
