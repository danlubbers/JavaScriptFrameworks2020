import React, { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";


function Address() {
  const [displayResults, setDisplayResults] = useState(false);
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */
  const [values, setValues] = useState([]);
  // Personal Information:
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');


  const addInfo = () => {
    setValues([...values, 
      {
        firstName,
        lastName, 
        address, 
        city, 
        state, 
        zipCode, 
        country
      }
    ])
  }

  const updateFirstName = e => setFirstName(e.target.value);
  const updateLastName = e => setLastName(e.target.value);
  const updateAddress = e => setAddress(e.target.value);
  const updateCity = e => setCity(e.target.value);
  const updateState = e => setState(e.target.value);
  const updateZip = e => setZipCode(e.target.value);
  const updateCountry = e => setCountry(e.target.value);

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */

  return (
    <>
      {displayResults 
        ? <AddressResults 
            values={values}/> 
        : <AddressForm 
            setDisplayResults={setDisplayResults} 
            values={values} 
            addInfo={addInfo} 
            updateFirstName={updateFirstName} 
            updateLastName={updateLastName} 
            updateAddress={updateAddress} 
            updateCity={updateCity} 
            updateState={updateState} 
            updateZip={updateZip} 
            updateCountry={updateCountry}
        />}
    </>
  )
}

export default Address;
