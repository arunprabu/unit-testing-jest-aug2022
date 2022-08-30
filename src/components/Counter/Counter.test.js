import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe('Counter Component', () => {  
  it('has initial counter value 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('counterValueEl')
    .textContent).toBe('0');
  });

  it('has proper increment and decrement feature', () => {
    render(<Counter />);
    const counterEl = screen.getByTestId('counterValueEl');
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');

    // before I mock fire increment event, let's check whether we have initial value 0
    expect(counterEl.textContent).toBe('0');
    // mock fire the click event on increment btn 
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterEl.textContent).toBe('2');

    // mock fire the click event on decrement btn 
    fireEvent.click(decrementBtn);
    expect(counterEl.textContent).toBe('1');
  });

});