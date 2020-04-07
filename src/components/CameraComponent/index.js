import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {
  Container,
  Preview,
  ButtonContainer,
  Capture,
  ImagePreview,
} from './styles';

export default function Camera({ dataFoto }) {
  const [foto, setFoto] = useState('');
  const refCamera = useRef();

  async function takePicture() {
    const camera = refCamera.current;
    if (camera) {
      const options = { width: 1000, quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);

      setFoto(data.uri);
      dataFoto(data.uri);
    }
  }

  function reloadCamera() {
    dataFoto('');
    setFoto('');
  }

  return (
    <Container>
      {!foto ? (
        <>
          <Preview
            ref={refCamera}
            permissionDialogTitle="Permission to use camera"
            permissionDialogMessage="We need your permission to use your camera phone"
          />
          <ButtonContainer>
            <Capture onPress={takePicture}>
              <Icon name="camera" size={30} color="#fff" />
            </Capture>
          </ButtonContainer>
        </>
      ) : (
        <>
          <ImagePreview source={{ uri: foto }} />
          <ButtonContainer>
            <Capture onPress={reloadCamera}>
              <Icon name="replay" size={30} color="#fff" />
            </Capture>
          </ButtonContainer>
        </>
      )}
    </Container>
  );
}

Camera.propTypes = {
  dataFoto: PropTypes.func.isRequired,
};
