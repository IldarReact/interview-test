import React, { useState, useEffect } from 'react';

const YouTubeEmbed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoId = 'dQw4w9WgXcQ';

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?` +
    new URLSearchParams({
      autoplay: '0',
      rel: '0',
      modestbranding: '1',
      iv_load_policy: '3',
      origin: window.location.origin,
    }).toString();

  const handleIframeError = (event: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    const iframe = event.target as HTMLIFrameElement;
    const iframeError = iframe.contentWindow?.document?.body?.textContent;

    if (iframeError?.includes('Access to resources at origin')) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.addEventListener('error', (event) => handleIframeError(event as unknown as React.SyntheticEvent<HTMLIFrameElement, Event>));
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('error', (event) => handleIframeError(event as unknown as React.SyntheticEvent<HTMLIFrameElement, Event>));
      }
    };
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-gray-600">Loading video...</div>
          </div>
        )}

        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            loading="lazy"
            onLoad={handleIframeLoad}
            onError={(event) => handleIframeError(event as unknown as React.SyntheticEvent<HTMLIFrameElement, Event>)}
            allowFullScreen
          />
        </div>

        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center p-4">
              <p className="text-gray-700 mb-2">
                Unable to load the video player due to CORS restrictions.
              </p>
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;
