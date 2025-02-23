import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Properties from '../Properties';

describe('Properties Component', () => {
  beforeEach(() => {
    render(<Properties />);
  });

  it('renders the main title', () => {
    const title = screen.getByText('You Will love us');
    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle('font-size: 52px');
    expect(title).toHaveStyle('font-weight: 800');
    expect(title).toHaveStyle('color: #000000');
    expect(title).toHaveStyle('line-height: 76px');
  });

  it('renders the subtitle', () => {
    const subtitle = screen.getByText('Because more than 268 other customers have loved us too');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveStyle('font-weight: 500');
    expect(subtitle).toHaveStyle('font-size: 20px');
    expect(subtitle).toHaveStyle('color: #737373');
    expect(subtitle).toHaveStyle('line-height: 32px');
  });

  it('renders the background image', () => {
    const backgroundImage = screen.getByAltText('background');
    expect(backgroundImage).toBeInTheDocument();
  });

  it('renders the security assurance section', () => {
    const securityTitles = screen.getAllByText('Security Assuarance');
    const securityDescriptions = screen.getAllByText(
      'Demonstrates commitment to user data security through encryption and secure payment practices'
    );
    const learnMoreLinks = screen.getAllByText('Learn more');

    expect(securityTitles.length).toBeGreaterThan(0); // Ensure at least one instance exists
    expect(securityDescriptions.length).toBeGreaterThan(0); // Ensure at least one instance exists
    expect(learnMoreLinks.length).toBeGreaterThan(0); // Ensure at least one instance exists
  });

  it('renders the support section', () => {
    const supportTitles = screen.getAllByText('Security Assuarance');
    const supportDescriptions = screen.getAllByText(
      'Demonstrates commitment to user data security through encryption and secure payment practices'
    );
    const learnMoreLinks = screen.getAllByText('Learn more');

    expect(supportTitles.length).toBeGreaterThan(0); // Ensure at least one instance exists
    expect(supportDescriptions.length).toBeGreaterThan(0); // Ensure at least one instance exists
    expect(learnMoreLinks.length).toBeGreaterThan(0); // Ensure at least one instance exists
  });

  it('renders the policy section', () => {
    const policyTitles = screen.getAllByText('Security Assuarance');
    const policyDescriptions = screen.getAllByText(
      'Demonstrates commitment to user data security through encryption and secure payment practices'
    );
    const learnMoreLinks = screen.getAllByText('Learn more');

    expect(policyTitles.length).toBeGreaterThan(0); // Ensure at least one instance exists
    expect(policyDescriptions.length).toBeGreaterThan(0); // Ensure at least one instance exists
    expect(learnMoreLinks.length).toBeGreaterThan(0); // Ensure at least one instance exists
  });

  it('renders the reputable section', () => {
    const reputableTitles = screen.getAllByText('Security Assuarance');
    const reputableDescriptions = screen.getAllByText(
      'Demonstrates commitment to user data security through encryption and secure payment practices'
    );
    const learnMoreLinks = screen.getAllByText('Learn more');

    expect(reputableTitles.length).toBeGreaterThan(0); // Ensure at least one instance exists
    expect(reputableDescriptions.length).toBeGreaterThan(0); // Ensure at least one instance exists
    expect(learnMoreLinks.length).toBeGreaterThan(0); // Ensure at least one instance exists
  });

  it('renders all icons', () => {
    const securityIcon = screen.getByAltText('security');
    const supportIcon = screen.getByAltText('support');
    const policyIcon = screen.getByAltText('policy');
    const reputableIcon = screen.getByAltText('reputable');

    expect(securityIcon).toBeInTheDocument();
    expect(supportIcon).toBeInTheDocument();
    expect(policyIcon).toBeInTheDocument();
    expect(reputableIcon).toBeInTheDocument();
  });

  it('renders the "Learn more" links with icons', () => {
    const learnMoreLinks = screen.getAllByText('Learn more');
    const showIcons = screen.getAllByAltText('Show Icon');

    expect(learnMoreLinks.length).toBe(4); // There are 4 "Learn more" links
    expect(showIcons.length).toBe(4); // There are 4 "Show Icon" images
  });
});