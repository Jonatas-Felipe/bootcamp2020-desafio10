import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  padding: 20px;
`;

export const Content = styled.View`
  width: 100%;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 15px;
`;

export const TitleBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const TextTitleBox = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7159c1;
  margin-left: 5px;
`;

export const ContentBox = styled.View`
  margin-bottom: 15px;
`;

export const SubTitleBox = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
`;

export const InfoBox = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const DateContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentOption = styled.View`
  width: 100%;
  background: #f8f9fd;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 15px 0;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Option = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 33.34%;
  border-left-width: ${(props) => (props.first ? '0' : '1px')};
  border-color: rgba(0, 0, 0, 0.1);
`;

export const TextOption = styled.Text`
  text-align: center;
`;
