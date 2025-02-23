import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the logo', () => {
    const logo = screen.getByAltText('logo footer');
    expect(logo).toBeInTheDocument();
  });

  it('renders the phone number section', () => {
    const phoneText = screen.getByText('Need help? Call us');
    const phoneNumber = screen.getByText('0710-333-313');

    expect(phoneText).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
    expect(phoneNumber).toHaveStyle('color: #F09814');
  });

  it('renders the contact information', () => {
    const address = screen.getByText('4517 Washington Ave. Manchester, Kentucky 39495');
    const hours = screen.getByText('Hours: 8:00 - 17:00, Mon - Sat');
    const email = screen.getByText('mjohnmwangi@gmail.com');

    expect(address).toBeInTheDocument();
    expect(hours).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it('renders the social media icons', () => {
    const fbIcon = screen.getByAltText('fbIcon');
    const twitterIcon = screen.getByAltText('twitterIcon');
    const linkedinIcon = screen.getByAltText('linkedinIcon');

    expect(fbIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });

  it('renders the support links', () => {
    const supportLinks = [
      'Forum Support',
      'Help Center',
      'Live Chat',
      'How it Works',
      'Security',
      'Privacy',
      'Charges Logs',
    ];

    supportLinks.forEach((link) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('renders the company links', () => {
    const companyLinks = [
      'About Us',
      'Community Blog',
      'Jobs and Careers',
      'Contact Us',
      'Our Awards',
      'Agencies',
    ];

    companyLinks.forEach((link) => {
      const linkElements = screen.getAllByText(link);
      expect(linkElements.length).toBeGreaterThan(0); 
    });
  });

  it('renders the services links', () => {
    const servicesLinks = [
      'Tour Guide',
      'Tour Booking',
      'Hotel Booking',
      'Ticket Booking',
      'Rental Services',
    ];

    servicesLinks.forEach((link) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('renders the legal links', () => {
    const legalLinks = [
      'Terms of Service',
      'Privacy Policy',
      'Cookies Policy',
      'Data Processing',
      'Data Policy',
      'Refund Policy',
    ];

    legalLinks.forEach((link) => {
      const linkElements = screen.getAllByText(link);
      expect(linkElements.length).toBeGreaterThan(0); 
    });
  });

  it('renders the copyright text', () => {
    const copyrightText = screen.getByText('© 2024 Travila Inc. All rights reserved.');
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders the footer links', () => {
    const footerLinks = ['Terms', 'Privacy Policy', 'Legal Notice', 'Accessibility'];

    footerLinks.forEach((link) => {
      const linkElements = screen.getAllByText(link);
      expect(linkElements.length).toBeGreaterThan(0);
    });
  });
});