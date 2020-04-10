import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 0 20px;
`;

export const DadosEntregador = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0;
`;

export const Entregador = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  margin-right: 12px;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonAction = styled.TouchableOpacity`
  margin: 0 5px;
`;

export const InfoEntregador = styled.View``;

export const Text = styled.Text`
  color: #666666;
`;

export const Nome = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
`;

export const TituloMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Titulo = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Menu = styled.View`
  flex-direction: row;
`;

export const MenuText = styled.Text`
  font-weight: bold;
  margin-left: 15px;
  color: ${(props) => (props.active ? '#7159c1' : '#999999')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;

export const ListEncomendas = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const EmptyContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: #ccc;
  font-weight: bold;
  font-size: 20px;
`;
