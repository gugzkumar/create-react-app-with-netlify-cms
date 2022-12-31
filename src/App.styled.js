import STYLE_CONSTS from './styles/consts';
import styled from '@emotion/styled';
const { HEADER_HEIGHT } = STYLE_CONSTS;

export const BodyContainer = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT});
`;