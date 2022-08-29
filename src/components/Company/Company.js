import React, { useState } from 'react'

const Company = (props) => {

  const [myCountry, setMyCountry] = useState('');

  const handleCountryNameChange = (event) => {
    setMyCountry(event.target.value);
  }

  return (
    <div>
      <h2>Company | Testing Props, Events, States, Hooks, JSX and Snapshot</h2>
      <h3>Welcome to My Company's official Website!</h3>
      <div data-testid="companyNameEl">
        {props.name}
      </div>
      
      <p>Employee Count:</p>
      <p data-testid="employeeCountEl"
       style={{color: '#0000ff'}}>318000+</p>

      <input type="text"
       placeholder='Enter Country' value={myCountry} 
       onChange={ handleCountryNameChange }/>

    </div>
  )
}

export default Company;