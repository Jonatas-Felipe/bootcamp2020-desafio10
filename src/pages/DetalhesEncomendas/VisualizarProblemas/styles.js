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

export const ListProblemas = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 13px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 15px;
  background: #fff;
  border-radius: 4px;
  margin: 7px 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Problema = styled.Text`
  color: #999;
  font-size: 16px;
`;

export const DataProblema = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;
