// Where to write test specs? here in this file
// How to Write?
//  by following Testing Pattern: AAA (Arrange, Act, Assert)

// Arrange 
import { render, screen } from '@testing-library/react';
import App from './App'; // taking up the comp for testing 

// Test Spec / Test case 
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
