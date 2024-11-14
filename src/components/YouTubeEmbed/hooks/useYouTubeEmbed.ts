// hooks/useYouTubeEmbed.tsx

import { useState, useCallback, useMemo } from 'react';
import { YouTubeEmbedConfig, DEFAULT_PLAYER_CONFIG } from '../types';

interface UseYouTubePlayerResult {
  hasError: boolean;
  embedUrl: string;
  handleIframeError: (event: React.SyntheticEvent<HTMLIFrameElement, Event>) => void;
  handleIframeLoad: () => void;
}

const createYouTubeUrl = (videoId: string, config: YouTubeEmbedConfig): string => {
  const params = new URLSearchParams(Object.entries(config)
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key]: String(value)
    }), {} as Record<string, string>));
    
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
};

export const useYouTubePlayer = (
  videoId: string, 
  customConfig?: Partial<YouTubeEmbedConfig>
): UseYouTubePlayerResult => {
  const [hasError, setHasError] = useState(false);

  const config = useMemo(
    () => ({ ...DEFAULT_PLAYER_CONFIG, ...customConfig }),
    [customConfig]
  );

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
