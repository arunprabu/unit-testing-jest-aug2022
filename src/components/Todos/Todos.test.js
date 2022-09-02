import { render, screen } from "@testing-library/react";
import Todos from "./Todos";

// Testing REST API Call
describe('TodosComponent', () => { 
  // To test static data in elements
  it(`has 'Todos | Testing AJAX Calls`, () => {
    render(<Todos />)
    expect(screen.getByText('Todos | Testing AJAX Calls')).toBeInTheDocument();
  });

  // To test the data coming out of async calls 
  it(`loads a todo item 'delectus aut autem'`, async() => {
    render(<Todos />);
    expect(await screen.findByText('delectus aut autem')).toBeInTheDocument();
  });
});

/* 
  3 Challenges / Disadv of API Testing
  
  1. Time Consuming  
  2. Availability of REST API (may be down, may be still in dev)
  3. No guarantee for the sample data like this 'delectus aut autem' 
*/