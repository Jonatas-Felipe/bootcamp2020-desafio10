import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import CameraComponent from '~/components/CameraComponent';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  padding: 20px;
`;

export const ContentCamera = styled.View`
  width: 100%;
  height: 445px;
  border-radius: 4px;
`;

export const Camera = styled(CameraComponent)``;

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
