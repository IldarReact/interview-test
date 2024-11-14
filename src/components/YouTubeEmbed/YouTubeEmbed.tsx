import React, { useCallback, useMemo } from 'react';
import { VideoFrame, PlayerContainer } from './styles';

type YouTubeEmbedProps = {
  videoId: string;
  autoplay?: boolean;
  showControls?: boolean;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, autoplay = false, showControls = true }) => {
  const createEmbedUrl = (videoId: string, autoplay: boolean, showControls: boolean): string => {
    const baseUrl = 'https://www.youtube-nocookie.com/embed/';
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      controls: showControls ? '1' : '0',
      rel: '0',
      modestbranding: '1',
      origin: window.location.origin,
    });
    return `${baseUrl}${videoId}?${params.toString()}`;
  };

  const embedUrl = useMemo(() => createEmbedUrl(videoId, autoplay, showControls), [videoId, autoplay, showControls]);

  const handleError = useCallback((error: React.SyntheticEvent<HTMLIFrameElement>) => {
    console.error('YouTube player error:', error);
  }, []);

  return (
    <PlayerContainer>
      <VideoFrame
        src={embedUrl}
        title={`YouTube video player - ${videoId}`}
        loading="lazy"
        onError={handleError}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </PlayerContainer>
  );
};

export default YouTubeEmbed;
