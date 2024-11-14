import React from 'react';
import { YouTubePlayerProps } from './types';
import {
  PlayerContainer,
  PlayerWrapper,
  VideoContainer,
  VideoFrame,
  ErrorContainer,
  ErrorText,
  ErrorLink,
} from './styles';

const YouTubeEmbed: React.FC<YouTubePlayerProps> = ({ 
  videoId,
  autoplay = false,
  showControls = true,
}) => {
  const baseEmbedUrl = 'https://www.youtube.com/embed/';
  
  // Properly format YouTube embed parameters
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    controls: showControls ? '1' : '0',
    rel: '0', // hide related videos
    modestbranding: '1', // minimize YouTube branding
    origin: window.location.origin,
  });

  const fullEmbedUrl = `${baseEmbedUrl}${videoId}?${params.toString()}`;

  const handleError = (error: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    console.error('YouTube player error:', error);
  };

  const handleLoad = () => {
    console.log('YouTube player loaded successfully');
  };

  return (
    <PlayerContainer>
      <PlayerWrapper>
        <VideoContainer>
          <VideoFrame
            src={fullEmbedUrl}
            title="YouTube video player"
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
        
        <ErrorContainer style={{ display: 'none' }}>
          <div>
            <ErrorText>
              Failed to load the video. Please watch directly on YouTube.
            </ErrorText>
            <ErrorLink
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </ErrorLink>
          </div>
        </ErrorContainer>
      </PlayerWrapper>
    </PlayerContainer>
  );
};

export default YouTubeEmbed;