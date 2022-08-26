// Where to write test specs? here in this file
// How to Write?
//  by following Testing Pattern: AAA (Arrange, Act, Assert)

// Arrange 
import { render, screen } from '@testing-library/react';
import App from './App'; // taking up the comp for testing 

// group of related test specs - Test Suite
describe('App Component', () => { 

  // Test Spec / Test case 
  it('should have app comp', () =>{ // 'it' is an alias of test
    // sometimes you can also have just the Assert logic
    expect(App).toBeTruthy();
  });

  // Test Spec / Test case 
  it('should have Welcome text', () => {
    // Act 
    // rendering the app comp in a sandbox kind of env 
    render(<App />);
    // executed by react-testing-library (rtl)
    // only after rendering we can query thru the dom element 
    const welcomeEl = screen.getByText(/Welcome to Unit Testing!!!/); 

    // Assert
    // expect is from JEST | toBeInTheDocument is from @testing-library/jest-dom
    expect(welcomeEl).toBeInTheDocument();
  }); 
  
});

