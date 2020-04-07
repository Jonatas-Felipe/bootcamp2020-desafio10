import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Background = styled.View`
  flex: 1;
  background: #7159c1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 244px;
  height: 48px;
`;

export const Form = styled.View`
  margin-top: 38px;
`;

export const Input = styled.TextInput`
  width: 325px;
  height: 45px;
  background: #fff;
  border-radius: 4px;
  font-size: 16px;
  padding-left: 20px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 45px;
  background: #82bf18;
  border-radius: 4px;
  margin-top: 15px;
  opacity: ${(props) => (props.enabled ? 1 : 0.6)};
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 16px;
`;
