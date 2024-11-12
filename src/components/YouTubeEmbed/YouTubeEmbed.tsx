import React from 'react';
import ReactPlayer from 'react-player';

// Type definitions for YouTube player errors
export type YouTubePlayerError = {
  data: number; // Error code from the player
  target: {
    playerInfo?: {
      code: number; // Internal player error code
      videoId: string; // ID of the video that caused the error
    };
  };
};

// Type for the progress state of the video
export type ProgressState = {
  played: number; // Playback progress (0-1)
  playedSeconds: number; // Time played in seconds
  loaded: number; // Loading progress (0-1)
  loadedSeconds: number; // Time loaded in seconds
};

// Props interface for the component
interface YouTubeEmbedProps {
  videoId: string; // YouTube video identifier
  width?: string | number; // Player width
  height?: string | number; // Player height
  onReady?: () => void; // Callback when player is ready
  onError?: (error: YouTubePlayerError) => void; // Error handler
  onProgress?: (state: ProgressState) => void; // Progress update handler
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  width = '100%',
  height = '100%',
  onReady,
  onError,
  onProgress,
}) => {
  // Reference to access player methods
  const playerRef = React.useRef<ReactPlayer>(null);

  return (
    <div style={{ 
      aspectRatio: '16/9', 
      maxWidth: '100%',
      position: 'relative',
      backgroundColor: '#000' // Dark background for loading state
    }}>
      <ReactPlayer
        ref={playerRef}
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width={width}
        height={height}
        controls={true}
        config={{
          youtube: {
            playerVars: { 
              origin: window.location.origin,
              /* cspell:disable */
              enablejsapi: 1, // Enable YouTube iframe API
              modestbranding: 1, // Use minimal YouTube branding
              rel: 0, // Disable related videos at the end
              showinfo: 0 // Hide video title and uploader info
              /* cspell:enable */
            }
          }
        }}
        style={{ margin: '0 auto' }}
        light={true} // Use light mode for better initial loading
        playing={false} // Start in paused state
        pip={true} // Enable picture-in-picture mode
        stopOnUnmount={true} // Clean up on component unmount
        onReady={onReady}
        onError={onError}
        onProgress={onProgress}
      />
    </div>
  );
};

export default YouTubeEmbed;