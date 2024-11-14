import { useState, useCallback, useMemo } from 'react';
import { YouTubeEmbedConfig, DEFAULT_PLAYER_CONFIG } from '../components/YouTubeEmbed/types';

interface UseYouTubePlayerResult {
  hasError: boolean;
  embedUrl: string;
  handleIframeError: (event: React.SyntheticEvent<HTMLIFrameElement, Event>) => void;
  handleIframeLoad: () => void;
}

const createYouTubeUrl = (videoId: string, config: YouTubeEmbedConfig): string => {
  // Правильное приведение типов для URLSearchParams
  const params = new URLSearchParams(Object.entries(config)
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key]: String(value) // Явное приведение всех значений к строке
    }), {} as Record<string, string>));
    
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
};

export const useYouTubePlayer = (
  videoId: string, 
  customConfig?: Partial<YouTubeEmbedConfig>
): UseYouTubePlayerResult => {
  const [hasError, setHasError] = useState(false);

  // Мемоизируем конфигурацию
  const config = useMemo(
    () => ({ ...DEFAULT_PLAYER_CONFIG, ...customConfig }),
    [customConfig]
  );

  // Мемоизируем URL
  const embedUrl = useMemo(
    () => createYouTubeUrl(videoId, config),
    [videoId, config]
  );

  const handleIframeError = useCallback(
    (event: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
      const iframe = event.target as HTMLIFrameElement;
      if (iframe.contentWindow?.document?.body?.textContent?.includes('Access to resources at origin')) {
        setHasError(true);
      }
    },
    []
  );

  const handleIframeLoad = useCallback(() => {
    setHasError(false);
  }, []);

  return {
    hasError,
    embedUrl,
    handleIframeError,
    handleIframeLoad,
  };
};