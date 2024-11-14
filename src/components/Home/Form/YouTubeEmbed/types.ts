export interface YouTubeEmbedConfig {
    autoplay: string | '0' | '1';
    rel: string | '0' | '1';
    modestbranding: string | '0' | '1';
    iv_load_policy: string | '1' | '3';
    origin: string;
}

// Updated default configuration
export const DEFAULT_PLAYER_CONFIG: YouTubeEmbedConfig = {
    autoplay: '0',
    rel: '0',
    modestbranding: '1',
    iv_load_policy: '3',
    origin: typeof window !== 'undefined' ? window.location.origin : '',
} as const;

// Additional types for strong typing
export type YouTubePlayerMode = 'normal' | 'privacy';
export type YouTubeQuality = 'default' | 'small' | 'medium' | 'large' | 'hd720' | 'hd1080';

export interface YouTubePlayerProps {
    videoId: string;
    autoplay?: boolean;
    showControls?: boolean;
    mode?: YouTubePlayerMode;
    quality?: YouTubeQuality;
}
