import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from "../Navbar";

describe('Navbar Component', () => {
  it('renders the Navbar component', () => {
    render(<Navbar />);
    
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    
    const searchInput = screen.getByPlaceholderText('What are you looking for?');
    expect(searchInput).toBeInTheDocument();
    
    const vendorButton = screen.getByText('Become a Vendor');
    expect(vendorButton).toBeInTheDocument();
  });

  it('opens the drawer when the menu icon is clicked', () => {
    render(<Navbar />);
    
    const drawer = screen.queryByRole('presentation');
    expect(drawer).not.toBeInTheDocument();
    
    const menuIconWrapper = screen.getByLabelText('menu').closest('div');
    fireEvent.click(menuIconWrapper);
    
    const openDrawer = screen.getByRole('presentation');
    expect(openDrawer).toBeInTheDocument();
    
    const homeItem = screen.getByText('Home');
    expect(homeItem).toBeInTheDocument();
  });

  it('closes the drawer when clicking outside', () => {
    render(<Navbar />);
    
    const menuIconWrapper = screen.getByLabelText('menu').closest('div');
    fireEvent.click(menuIconWrapper);
    
    const openDrawer = screen.getByRole('presentation');
    expect(openDrawer).toBeInTheDocument();
    
    const backdrop = document.querySelector('.MuiBackdrop-root');
    fireEvent.click(backdrop);
    
    const closedDrawer = screen.queryByRole('presentation');
    expect(closedDrawer).not.toBeInTheDocument();
  });
});