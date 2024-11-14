import { lazy, Suspense } from 'react';
import { Box, Stack } from '@mui/material';
import { StyledTitle, StyledSubtitle } from './styles';

const TitleAndVideo = () => {
  const YouTubeEmbed = lazy(() => import('../YouTubeEmbed/YouTubeEmbed'));

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        mb: { xs: 3, md: 6 },
        textAlign: { xs: 'center', md: 'left' },
        gap: { xs: 3, md: 10 }
      }}
    >
      <Box flex={1} sx={{ maxWidth: { xs: '100%', md: '400px' }, px: { xs: 2, md: 0 } }}>
        <StyledTitle variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: { xs: 1.2, md: 1.3 } }}>Most important title on the page</StyledTitle>
        <StyledSubtitle variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: { xs: 1.5, md: 1.6 } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
        </StyledSubtitle>
      </Box>
      <Box flex={1} sx={{ width: '100%', maxWidth: { xs: '100%', md: '560px' } }}>
        <Suspense fallback={<div>Loading...</div>}>
          <YouTubeEmbed videoId="dQw4w9WgXcQ" autoplay={false} showControls />
        </Suspense>
      </Box>
    </Stack>
  );
};

export default TitleAndVideo;
