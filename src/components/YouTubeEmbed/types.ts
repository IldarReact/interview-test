// Тип для конфигурации плеера YouTube
export interface YouTubeEmbedConfig {
    autoplay: string;
    rel: string;
    modestbranding: string;
    iv_load_policy: string;
    origin: string;
}

// Тип для пропсов компонента YouTubeEmbed
export interface YouTubePlayerProps {
    videoId: string;
    autoplay?: boolean;
    showControls?: boolean;
}

// Конфигурация по умолчанию для плеера YouTube
export const DEFAULT_PLAYER_CONFIG: YouTubeEmbedConfig = {
    autoplay: '0',
    rel: '0',
    modestbranding: '1',
    iv_load_policy: '3',
    origin: typeof window !== 'undefined' ? window.location.origin : '',
};
