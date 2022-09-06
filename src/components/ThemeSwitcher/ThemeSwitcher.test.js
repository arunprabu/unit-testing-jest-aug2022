import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";

import ThemeSwitcher from "./ThemeSwitcher";

describe('Theme Switcher Component', () => {
  
  it('has toggling theme button', () => {
    render(<ThemeSwitcher />);

    const btnEl = screen.getByText(/Switch Theme/i);
    const paraEl = screen.getByText(/Current Theme/);
    userEvent.click(btnEl);
    expect(paraEl).toHaveTextContent(/dark/i);
  });

  // The following tests use Enzyme with unofficial adapter 
  // you need to configure enzyme to use the adapter
  // Refer: setupTests.js for it
  it('should have h2 element',  () => {
    // shallow rendering will render this comp only. not any of its child components
    const wrapper = shallow(<ThemeSwitcher />);
    
    console.log(wrapper.find('h2'));
    // now let's use jest's expect and toBeTruthy()
    expect(wrapper.find('h2')).toHaveLength(1);
  });
  
  it('should have anchor tag with text Refer Enzyme Examples', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('a')
      .contains('Refer Enzyme Examples'))
      .toEqual(true);
  });

  it('should have button with event handler', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').contains('dark')).toEqual(true);

    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').contains('light')).toEqual(true);
  });

  

});