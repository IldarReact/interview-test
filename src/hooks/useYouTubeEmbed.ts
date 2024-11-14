import { useState, useEffect, useCallback } from 'react';
import { YouTubeEmbedConfig, DEFAULT_PLAYER_CONFIG } from '../components/YouTubeEmbed/types';

// Типизация возвращаемого значения
interface UseYouTubePlayerResult {
  hasError: boolean;
  embedUrl: string;
  handleIframeError: (event: React.SyntheticEvent<HTMLIFrameElement, Event>) => void;
  handleIframeLoad: () => void;
}

export const useYouTubePlayer = (videoId: string, customConfig?: YouTubeEmbedConfig): UseYouTubePlayerResult => {
  const [hasError, setHasError] = useState(false);

  // Использование пользовательской конфигурации, если она есть, или конфигурации по умолчанию
  const config = { ...DEFAULT_PLAYER_CONFIG, ...customConfig };

  // Создание URL для встраивания YouTube с параметрами
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${new URLSearchParams(config as Record<string, string>).toString()}`;

  // Обработчик ошибок iframe
  const handleIframeError = useCallback(
    (event: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
      const iframe = event.target as HTMLIFrameElement;
      const iframeError = iframe.contentWindow?.document?.body?.textContent;

      if (iframeError?.includes('Access to resources at origin')) {
        setHasError(true);
      }
    },
    []
  );

  // Обработчик загрузки iframe
  const handleIframeLoad = useCallback(() => {
    setHasError(false);
  }, []);

  // Добавление слушателей событий для iframe (ошибка и загрузка)
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (!iframe) return;

    const errorHandler = (event: Event) =>
      handleIframeError(event as unknown as React.SyntheticEvent<HTMLIFrameElement, Event>);

    iframe.addEventListener('error', errorHandler);
    return () => iframe.removeEventListener('error', errorHandler);
  }, [handleIframeError]);

  return {
    hasError,
    embedUrl,
    handleIframeError,
    handleIframeLoad,
  };
};
