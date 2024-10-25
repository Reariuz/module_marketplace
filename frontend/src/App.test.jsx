// src/frontend/src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


jest.mock('./components/TitleBar', () => () => <div>TitleBar</div>);
jest.mock('./components/Header', () => () => <div>Header</div>);
jest.mock('./components/Sidebar', () => () => <div>Sidebar</div>);
jest.mock('./components/MainContent', () => () => <div>MainContent</div>);
jest.mock('./components/Footer', () => () => <div>Footer</div>);

describe('App Component', () => {
    test('renders correctly', () => {
        console.log = jest.fn(); // Mock console.log to suppress output
        render(<App />);
        
        // Check if all components are rendered
        expect(screen.getByText('TitleBar')).toBeInTheDocument();
        expect(screen.getByText('Header')).toBeInTheDocument();
        expect(screen.getByText('Sidebar')).toBeInTheDocument();
        expect(screen.getByText('MainContent')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();

        // Optionally, check the console log
        expect(console.log).toHaveBeenCalledWith('app rendered');
    });
});
