import { render, screen, fireEvent } from "@testing-library/react";
import Company from "./Company";
import renderer from 'react-test-renderer';

describe('CompanyComponent', () => { 

  
  // setting up
  // beforeEach( () => {
  // })

  // beforeAll( () => {

  // });

  // Tear down 
  // afterEach
  // afterAll 

  // Test spec #1
  it('should be available within app', ()=> {
    expect(Company).toBeDefined();
  });

  // Test Spec #2 - Let's test the props
  it('receives props and displays them properly', () =>{
    // rendering the comp with props 
    render(<Company name='Cognizant Technologies Pvt Ltd'/>);
    // act 
    // fetching the element 
    const companyNameEl = screen.getByTestId('companyNameEl');
    
    // assert 
    // checking if the prop is displayed inside the element or not
    expect(companyNameEl).toHaveTextContent('Cognizant Technologies Pvt Ltd');
  });

  // Test spec #3
  it('has Welcome to My Company\'s official Website!', () => {
    render(<Company />);
    const officialTxtEl = screen.getByText(`Welcome to My Company's official Website!`);
    expect(officialTxtEl).toBeInTheDocument();
  });

  // Test Spec #4
  it('has text with css color green', () => {
    render(<Company />);
    // expect(screen.getByTestId('employeeCountEl'))
    // .toHaveStyle('color: green');

    // if you are working with color code -- try the following 
    // use  rgb code or hexadecimal
    expect(screen.getByTestId('employeeCountEl')).toHaveStyle('color: #0000ff');
  });


  // Test spec #5
  // TODO: test whether the el has class  'btn'  
  // my requirement: Do Not use getByTestId() . instead use 'getByRole()
  // Have the button with label being 'JOIN COGNIZANT' 

  // Test Spec #6
  it(`has an input element with placeholder 'Enter Country'`, () => {
    render(<Company />);
    expect(screen.getByPlaceholderText('Enter Country')).toBeTruthy();
  });

  // Test Spec #7. Testing events, useState hook
  it(`should update country on onChange event`, () => {
    render(<Company />);
    // find the element with placeholder 'Enter Country' 
    const countryInput = screen.getByPlaceholderText('Enter Country');
    // now checking if onChange is working or not 
    // mock fire change event with the mock value -- all thru program
    fireEvent.change(countryInput, { target: {value: 'Canada'}});
    // finally checking if the value of input element is showing the entered country or not
    expect(countryInput.value).toBe('Canada');
  });

  // Snapshot Testing
  it('should have right company comp snapshot', () => {
    // to take snapshot -- we need a tool named react-test-renderer (npm i react-test-renderer )
    // taking a snapshot and convert it into JSON
    // [RECOMMENDED]: Take snapshots with necessary props
    const snapshotJSON = renderer.create(<Company name='Cognizant'/>).toJSON();
    // let's assert with a matcher toMatchSnapshot() from jest
    expect(snapshotJSON).toMatchSnapshot();
  }); 

  
})