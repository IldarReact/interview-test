import React, { useState, useEffect } from 'react';
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
  const [isIframeLoaded, setIframeLoaded] = useState(false);

  const baseEmbedUrl = 'https://www.youtube.com/embed/';
  
  // Формируем параметры для встраивания YouTube
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    controls: showControls ? '1' : '0',
    rel: '0', // скрыть связанные видео
    modestbranding: '1', // минимизировать брендинг YouTube
    origin: window.location.origin,
  });

  const fullEmbedUrl = `${baseEmbedUrl}${videoId}?${params.toString()}`;

  const handleError = (error: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    console.error('Ошибка плеера YouTube:', error);
  };

  const handleLoad = () => {
    setIframeLoaded(true);
    console.log('Плеер YouTube загружен успешно');
  };

  useEffect(() => {
    // Запуск только когда компонент в зоне видимости
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIframeLoaded(true); // Загружаем iframe, когда элемент виден
      }
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    const iframeContainer = document.getElementById('youtube-iframe-container');

    if (iframeContainer) {
      observer.observe(iframeContainer);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <PlayerContainer>
      <PlayerWrapper>
        <VideoContainer id="youtube-iframe-container">
          {isIframeLoaded && (
            <VideoFrame
              src={fullEmbedUrl}
              title="YouTube video player"
              loading="lazy"
              onLoad={handleLoad}
              onError={handleError}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </VideoContainer>
        
        {!isIframeLoaded && (
          <ErrorContainer style={{ display: 'none' }}>
            <div>
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
            </div>
          </ErrorContainer>
        )}
      </PlayerWrapper>
    </PlayerContainer>
  );
};

export default YouTubeEmbed;
