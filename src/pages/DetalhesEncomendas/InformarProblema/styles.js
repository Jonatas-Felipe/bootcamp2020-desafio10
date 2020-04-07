import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  padding: 20px;
`;

export const TextArea = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 10,
  textAlignVertical: 'top',
})`
  width: 100%;
  height: 300px;
  background: #fff;
  border-radius: 4px;
  font-size: 16px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  background: #7159c1;
  border-radius: 4px;
  margin-top: 15px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
