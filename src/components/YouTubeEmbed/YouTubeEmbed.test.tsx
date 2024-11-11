import React from 'react';
import { render, screen } from '@testing-library/react';
import YouTubeEmbed from './YouTubeEmbed';
import '@testing-library/jest-dom';


describe('YouTubeEmbed', () => {
  it('renders an iframe with the correct src', () => {
    const videoId = 'abc123';
    render(<YouTubeEmbed videoId={videoId} />);
    const iframe = screen.getByRole('iframe');
    expect(iframe).toHaveAttribute('src', `https://www.youtube.com/embed/${videoId}`);
  });

  it('renders an iframe with the specified width and height', () => {
    const width = 800;
    const height = 450;
    render(<YouTubeEmbed videoId="abc123" width={width} height={height} />);
    const iframe = screen.getByRole('iframe');
    expect(iframe).toHaveAttribute('width', width.toString());
    expect(iframe).toHaveAttribute('height', height.toString());
  });

  it('uses default width and height if not provided', () => {
    render(<YouTubeEmbed videoId="abc123" />);
    const iframe = screen.getByRole('iframe');
    expect(iframe).toHaveAttribute('width', '640');
    expect(iframe).toHaveAttribute('height', '360');
  });
});