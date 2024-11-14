import { DEFAULT_PLAYER_CONFIG } from '../components/Home/Form/YouTubeEmbed/types';

// Using YouTube player configuration
export const getYouTubeEmbedUrl = (videoId: string, config = DEFAULT_PLAYER_CONFIG) => {
  const baseEmbedUrl = 'https://www.youtube.com/embed/';
  const params = new URLSearchParams({
    autoplay: config.autoplay,
    controls: config.rel,
    rel: config.modestbranding,
    modestbranding: config.iv_load_policy,
    origin: config.origin,
  });

  return `${baseEmbedUrl}${videoId}?${params.toString()}`;
};
