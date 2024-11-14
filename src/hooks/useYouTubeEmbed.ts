import { useState, useEffect, useCallback } from 'react';
import { DEFAULT_PLAYER_CONFIG } from '../utils/youtube';

export const useYouTubePlayer = (videoId: string) => {
  const [hasError, setHasError] = useState(false);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${new URLSearchParams(
    DEFAULT_PLAYER_CONFIG
  ).toString()}`;

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

  const handleIframeLoad = useCallback(() => {
    setHasError(false);
  }, []);

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