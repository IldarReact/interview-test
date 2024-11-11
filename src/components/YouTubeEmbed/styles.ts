import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; // 16:9 aspect ratio
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;