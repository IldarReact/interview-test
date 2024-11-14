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
    console.log('Плеер YouTube загружен успешно');
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
      </PlayerWrapper>
    </PlayerContainer>
  );
};

export default YouTubeEmbed;
