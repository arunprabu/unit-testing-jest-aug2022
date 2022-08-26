// Arrange 
import About, { add } from './About';

// desc 
describe('About Component', () => {
  // it
  it('should be available', () => {
    // assert 
    expect(About).toBeDefined();
  });

  it('should add two numbers correctly', () => {
    // sometimes multiple expectations are needed
    expect(add(10, 20)).toEqual(30);
    expect(add(5, 7)).toEqual(12);
  });

  it('has add which handles invalid inputs', () =>{
    expect(add('ABC', 'XYZ')).toBe('Wrong Inputs');
  });

  it('should add numbers properly and return number as datatype', () => {
    //check the return type
    expect(add(10, 20)).not.toBeNaN();
  });
  
});
  
  
