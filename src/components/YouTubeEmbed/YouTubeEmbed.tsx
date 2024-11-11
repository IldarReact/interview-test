import React from 'react';
import { StyledWrapper } from './styles';

interface YouTubeEmbedProps {
  videoId: string;
  width?: number;
  height?: number;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  width = 640,
  height = 360,
}) => {
  return (
    <StyledWrapper>
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </StyledWrapper>
  );
};

export default YouTubeEmbed;