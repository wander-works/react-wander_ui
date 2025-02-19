import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for custom 
import TopCategories from '../topCategories'

describe('Guide Component', () => {
  const images = [
    { src: 'top.png.png', label: 'Mountain', activities: '356 Tours, 248 Activities' },
    { src: 'top2.png.png', label: 'Safari', activities: '356 Tours, 248 Activities' },
    { src: 'top3.png.png', label: 'Desert', activities: '356 Tours, 248 Activities' },
    { src: 'top4.png.png', label: 'Flower', activities: '356 Tours, 248 Activities' },
    { src: 'top5.png.png', label: 'Beach', activities: '356 Tours, 248 Activities' },
    { src: 'top6.png.png', label: 'Temples', activities: '356 Tours, 248 Activities' },
    { src: 'top7.png.png', label: 'Yacht', activities: '356 Tours, 248 Activities' },
  ];

  beforeEach(() => {
    render(<TopCategories />);
  });

  it('renders the main title', () => {
    const title = screen.getByText('Top Categories of Tours');
    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle('font-size: 52px');
    expect(title).toHaveStyle('font-weight: 800');
    expect(title).toHaveStyle('color: #000339');
  });

  it('renders the subtitle', () => {
    const subtitle = screen.getByText('Favorite destinations based on customer reviews');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveStyle('font-size: 16px');
    expect(subtitle).toHaveStyle('font-weight: 500');
    expect(subtitle).toHaveStyle('color: #5A6473');
  });

  it('renders all images with correct labels and activities', () => {
    images.forEach((image) => {
      const label = screen.getByText(image.label);
      const activities = screen.getAllByText(image.activities);

      expect(label).toBeInTheDocument();
      expect(activities.length).toBeGreaterThan(0); 
    });
  });

  it('renders the correct number of image cards', () => {
    const imageCards = screen.getAllByRole('img', { name: /TopImage/ });
    expect(imageCards).toHaveLength(images.length);
  });

  it('renders the display icon for each image card', () => {
    const displayIcons = screen.getAllByRole('img', { name: 'Display Icon' });
    expect(displayIcons).toHaveLength(images.length);
  });
});