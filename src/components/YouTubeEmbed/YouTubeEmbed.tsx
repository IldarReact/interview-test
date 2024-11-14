import React, { memo, useCallback, useMemo } from 'react';
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

// Вынесем создание URL в отдельную функцию для мемоизации
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

const YouTubeEmbed: React.FC<YouTubePlayerProps> = memo(({ 
  videoId,
  autoplay = false,
  showControls = true,
}) => {
  // Мемоизируем URL для предотвращения лишних перерендеров
  const embedUrl = useMemo(() => 
    createEmbedUrl(videoId, autoplay, showControls),
    [videoId, autoplay, showControls]
  );

  // Используем useCallback для обработчиков событий
  const handleError = useCallback((error: React.SyntheticEvent<HTMLIFrameElement>) => {
    console.error('YouTube player error:', error);
  }, []);

  // Используем IntersectionObserver через хук
  const videoRef = useIntersectionObserver<HTMLDivElement>((isVisible) => {
    if (isVisible) {
      // Можно добавить дополнительную логику при появлении в поле зрения
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
            Не удалось загрузить видео. Смотрите на YouTube.
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

// Кастомный хук для IntersectionObserver
function useIntersectionObserver<T extends Element>(
  callback: (isVisible: boolean) => void,
  options = { threshold: 0.5 }
) {
  const ref = React.useRef<T>(null);

  React.useEffect(() => {
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

YouTubeEmbed.displayName = 'YouTubeEmbed';

export default YouTubeEmbed;