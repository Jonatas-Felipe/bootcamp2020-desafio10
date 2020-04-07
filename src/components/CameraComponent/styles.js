import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #000;
`;

export const Preview = styled(RNCamera).attrs({
  type: RNCamera.Constants.Type.back,
  autoFocus: RNCamera.Constants.AutoFocus.on,
  flashMode: RNCamera.Constants.FlashMode.off,
})`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  border-radius: 50px;
`;

export const ButtonContainer = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: center;
`;

export const Capture = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.3);
  width: 62px;
  height: 62px;
  border-radius: 31px;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

export const ImagePreview = styled.Image`
  width: 100%;
  height: 100%;
`;
