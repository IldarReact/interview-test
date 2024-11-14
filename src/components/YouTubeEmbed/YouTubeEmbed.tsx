// YouTubeEmbed.tsx

import React, { memo, useCallback, useMemo, useEffect, useRef, SyntheticEvent } from 'react';
import { PlayerContainer, PlayerWrapper, VideoContainer, VideoFrame, ErrorContainer, ErrorText, ErrorLink } from './styles';

interface YouTubePlayerProps {
  videoId: string;
  autoplay?: boolean;
  showControls?: boolean;
}

// Функция для создания URL-адреса встраивания видео YouTube
const createEmbedUrl = (videoId: string, autoplay: boolean, showControls: boolean): string => {
  const baseUrl = 'https://www.youtube-nocookie.com/embed/';
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    controls: showControls ? '1' : '0',
    rel: '0',
    modestbranding: '1',
    origin: window.location.origin,
    loading: 'lazy', // Улучшение производительности за счет отложенной загрузки
  });
  return `${baseUrl}${videoId}?${params.toString()}`;
};

// Хук для отслеживания видимости элемента через IntersectionObserver
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
    console.error('Ошибка YouTube плеера:', error);
  }, []);

  const videoRef = useIntersectionObserver<HTMLDivElement>((isVisible) => {
    if (isVisible) {
      console.log('Видео контейнер виден');
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
            Видео не загрузилось. Смотреть на YouTube.
          </ErrorText>
          <ErrorLink
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Смотреть на YouTube
          </ErrorLink>
        </ErrorContainer>
      </PlayerWrapper>
    </PlayerContainer>
  );
});

YouTubeEmbed.displayName = 'YouTubeEmbed';

export default YouTubeEmbed;
