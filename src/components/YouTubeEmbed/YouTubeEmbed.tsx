import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { StyledWrapper } from './styles';

interface YouTubeEmbedProps extends YouTubeProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, ...props }) => {
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <StyledWrapper>
      <YouTube videoId={videoId} opts={opts} {...props} />
    </StyledWrapper>
  );
};

export default YouTubeEmbed;