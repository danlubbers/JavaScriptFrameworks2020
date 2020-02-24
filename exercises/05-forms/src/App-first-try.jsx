import React, { useState, useEffect } from "react";
import "./App.css";
// Import data from "assets/countries.json" and "assets/states.json" here
import countries from './assets/countries.json';
import states from './assets/states.json';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [form, setForm] = useState(false);

  const handleFirstName = e => {
    setFirstName(e.target.value);
  }
  
  const handleLastName = e => {
    setLastName(e.target.value);
  }
  
  const handleAddress = e => {
    setAddress(e.target.value);
  }
  
  const handleCity = e => {
    setCity(e.target.value);
  }
  
  const handleState = e => {
    setState(e.target.value);
  }
  
  const handleZip = e => {
    setZip(e.target.value);
  }
  
  const handleCountry = e => {
    setCountry(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setForm(true);
  }
  
  useEffect(() => {
    // console.log(firstName)
    // console.log(lastName)
    // console.log(address)
    // console.log(city)
    // console.log(state)
    // console.log(zip)
    // console.log(country)
    // console.log(form)
  }, [firstName, lastName, address, city, state, zip, country, form])

  return (

    <>
      {!form && 
      <form className="container mt-4" onSubmit={handleSubmit}>
        {/* You will need to handle form submission */}
        <div className="form-group">
          <label htmlFor="firstName" className="control-label">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-control"
            onBlur={handleFirstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="control-label">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="form-control"
            onBlur={handleLastName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1" className="control-label">
            Address Line 1
          </label>
          <input
            id="addressLine1"
            name="addressLine1"
            type="text"
            className="form-control"
            onBlur={handleAddress}
          />
          <p className="help-block text-muted">
            Street Address, P.O. Box, Company Name, C/O
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="city" className="control-label">
            City / Town
          </label>
          <input id="city" name="city" type="text" className="form-control" onBlur={handleCity}/>
        </div>
        <div className="form-group">
          <label htmlFor="state" className="control-label">
            State / Province / Region
          </label>
          {/* Loop through the states you imported here */}
          <select id="state" name="state" className="form-control" onChange={handleState}>
            <option value="">Please choose an State</option>
              {states.map((state, i) => {
              return (
                <option value={state} key={i}>{state}</option> 
              )
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="postalCode" className="control-label">
            Zip / Postal Code
          </label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            className="form-control"
            onBlur={handleZip}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country" className="control-label">
            Country
          </label>
          {/* Loop through the countries you imported here */}
          <select id="country" name="country" className="form-control" onChange={handleCountry}>
            <option value="">Please choose a Country</option>
            {countries.map((country, i) => {
              return (
              <option value={country} key={i}>{country}</option>
              )
            })
            }

          </select>
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
      }

      <div>
          {form && (
            <div className="card card-body bg-light mt-4 mb-4">
      
              <ul className="list-unstyled mb-0">
                <li><strong>First Name:</strong> {firstName}</li>
                <li><strong>Last Name:</strong> {lastName}</li>
                <li><strong>Address:</strong> {address}</li>
                <li><strong>City:</strong> {city}</li>
                <li><strong>State:</strong> {state}</li>
                <li><strong>Zip Code:</strong> {zip}</li>
                <li><strong>Country:</strong> {country}</li>
              </ul>
            </div>
          )}
      </div>
    </>
  );
}

export default App;
