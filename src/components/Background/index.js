import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#7159c1', '#fff'],
  start: { x: 0.0, y: 0.25 },
  end: { x: 0.0, y: 0.251 },
})`
  flex: 1;
`;
