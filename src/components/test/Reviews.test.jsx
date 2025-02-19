import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reviews from '../Reviews';

describe('Reviews Component', () => {
  it('renders the Reviews component with correct headings', () => {
    render(<Reviews />);

    const heading = screen.getByText('Popular Experiences');
    expect(heading).toBeInTheDocument();

    const subheading = screen.getByText('The best booking platform you can trust');
    expect(subheading).toBeInTheDocument();
  });

  it('renders all experience cards with correct details', () => {
    render(<Reviews />);

    const experienceCards = screen.getAllByRole('img', { name: /Journey/i });
    expect(experienceCards.length).toBe(6); 

    const firstCardTitles = screen.getAllByText('California Sunset/Twilight Boat Cruise');
    expect(firstCardTitles.length).toBe(2); 
    expect(firstCardTitles[0]).toBeInTheDocument();

    const secondCardTitles = screen.getAllByText('NYC: Food Tastings and Culture Tour');
    expect(secondCardTitles.length).toBe(2); 
    expect(secondCardTitles[0]).toBeInTheDocument();

    const thirdCardTitles = screen.getAllByText('Grand Canyon Horseshoe Bend 2 days');
    expect(thirdCardTitles.length).toBe(2);
    expect(thirdCardTitles[0]).toBeInTheDocument();
  });

  it('renders the "Load More" button and responds to clicks', () => {
    render(<Reviews />);

    const loadMoreButton = screen.getByRole('button', { name: /Load More/i });
    expect(loadMoreButton).toBeInTheDocument();

    fireEvent.click(loadMoreButton);

  });

  it('renders the rating and price details correctly', () => {
    render(<Reviews />);

    const ratings = screen.getAllByText('4.96 (672 reviews)');
    expect(ratings.length).toBe(6);
    expect(ratings[0]).toBeInTheDocument();

    const priceContainers = screen.getAllByText((content, element) => {
      const hasPrice = element.textContent.includes('$48.25');
      const hasPersonText = element.textContent.includes('/ person');
      const isPriceElement = element.classList.contains('MuiTypography-body2'); 
      return hasPrice && hasPersonText && isPriceElement;
    });
    expect(priceContainers.length).toBe(2); 
    expect(priceContainers[0]).toBeInTheDocument();
  });

  it('renders the "Book Now" button for each experience card', () => {
    render(<Reviews />);

    const bookNowButtons = screen.getAllByText('Book Now');
    expect(bookNowButtons.length).toBe(6); 
  });
});