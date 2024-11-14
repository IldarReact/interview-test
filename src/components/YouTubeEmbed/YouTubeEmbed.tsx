import React, { memo, useCallback, useMemo, useEffect, useRef, SyntheticEvent } from 'react';
import { PlayerContainer, PlayerWrapper, VideoContainer, VideoFrame, ErrorContainer, ErrorText, ErrorLink } from './styles';

interface YouTubePlayerProps {
  videoId: string;
  autoplay?: boolean;
  showControls?: boolean;
}

const createEmbedUrl = (videoId: string, autoplay: boolean, showControls: boolean): string => {
  const baseUrl = 'https://www.youtube-nocookie.com/embed/';
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    controls: showControls ? '1' : '0',
    rel: '0',
    modestbranding: '1',
    origin: window.location.origin,
    loading: 'lazy',
  });
  return `${baseUrl}${videoId}?${params.toString()}`;
};

function useIntersectionObserver<T extends Element>(
  callback: (isVisible: boolean) => void,
  options = { threshold: 0.5 }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callback, options]);

  return ref;
}

const YouTubeEmbed: React.FC<YouTubePlayerProps> = memo(({ 
  videoId,
  autoplay = false,
  showControls = true,
}) => {
  const embedUrl = useMemo(() => 
    createEmbedUrl(videoId, autoplay, showControls),
    [videoId, autoplay, showControls]
  );

  const handleError = useCallback((error: SyntheticEvent<HTMLIFrameElement>) => {
    console.error('YouTube player error:', error);
  }, []);

  const videoRef = useIntersectionObserver<HTMLDivElement>((isVisible) => {
    if (isVisible) {
      console.log('Video container is visible');
    }
  });

  return (
    <PlayerContainer>
      <PlayerWrapper>
        <VideoContainer ref={videoRef}>
          <VideoFrame
            src={embedUrl}
            title={`YouTube video player - ${videoId}`}
            onError={handleError}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
        
        <ErrorContainer style={{ display: 'none' }}>
          <ErrorText>
            Failed to load video. Watch on YouTube.
          </ErrorText>
          <ErrorLink
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </ErrorLink>
        </ErrorContainer>
      </PlayerWrapper>
    </PlayerContainer>
  );
});

YouTubeEmbed.displayName = 'YouTubeEmbed';

export default YouTubeEmbed;