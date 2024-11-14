import styled from '@emotion/styled';

export const PlayerContainer = styled('div')({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '16px', 
  position: 'relative', 
  height: 0,
  paddingBottom: '56.25%',
  '@media (max-width: 600px)': { 
    padding: '8px',
    paddingBottom: '75%',
  },
});

export const VideoFrame = styled('iframe')({
  position: 'absolute', 
  left: 0,
  width: '100%',
  height: '100%', 
  border: 'none',
});