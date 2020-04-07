import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  background: #fff;
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 68px;
  margin: 70px 0 40px;
`;

export const EntregadorInfoGroup = styled.View`
  padding: 0 36px;
  width: 100%;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Info = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 305px;
  height: 45px;
  background: #e74040;
  border-radius: 4px;
  margin-top: 15px;
  margin: 15px 0px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
