import React, { useState, useEffect } from "react";
import "./App.css";
// Import data from "assets/countries.json" and "assets/states.json" here
import countries from './assets/countries.json';
import states from './assets/states.json';

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const [form, setForm] = useState(false);

  const handleValues = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    setForm(true);
  }
  
  useEffect(() => {
  }, [form])

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
            value={values.firstName}
            onChange={handleValues}
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
            value={values.lastName}
            onChange={handleValues}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1" className="control-label">
            Address Line 1
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="form-control"
            value={values.address}
            onChange={handleValues}
          />
          <p className="help-block text-muted">
            Street Address, P.O. Box, Company Name, C/O
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="city" className="control-label">
            City / Town
          </label>
          <input id="city" name="city" type="text" className="form-control" value={values.city} onChange={handleValues}/>
        </div>
        <div className="form-group">
          <label htmlFor="state" className="control-label">
            State / Province / Region
          </label>
          {/* Loop through the states you imported here */}
          <select id="state" name="state" className="form-control" value={values.state} onChange={handleValues}>
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
            id="zipCode"
            name="zipCode"
            type="text"
            className="form-control"
            value={values.zipCode}
            onChange={handleValues}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country" className="control-label">
            Country
          </label>
          {/* Loop through the countries you imported here */}
          <select id="country" name="country" className="form-control" value={values.country} onChange={handleValues}>
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
                {Object.values(values).map((value, i) => {
                  return <li key={`value-${i}`}>{value}</li>
                })}
              </ul>
            </div>
          )}
      </div>
    </>
  );
}

export default App;
