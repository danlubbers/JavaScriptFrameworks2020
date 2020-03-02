import React from "react";
import "./AddressForm.css";
import PropTypes from "prop-types";
// Import data from "assets/countries.json" and "assets/states.json" here
import countries from "../../assets/countries";
import states from "../../assets/states";

/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - setDisplayResults()
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 * - a callback function(s) for setting first name, last name, etc.
 */
function AddressForm(props) {
  /**
   * You will need to:
   * - Set the value of each <input> / <select> to something from props
   * - Use callback function(s) in props to update <App>'s state
   * - Add an event handler to handle form submission
   */
  // Destructure off props
  let {firstName, lastName, address, city, state, zipCode, country} = props.values;

  const handleSubmit = e => {
    e.preventDefault();
    props.setDisplayResults(true);
    props.addInfo()
  }

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={firstName}
          onChange={e => props.updateFirstName(e)}
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
          value={lastName}
          onChange={e => props.updateLastName(e)}
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
          value={address}
          onChange={e => props.updateAddress(e)}
        />
        <p className="help-block text-muted">
          Street address, P.O. box, company name, c/o
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city" name="city" type="text" className="form-control" value={city} onChange={e => props.updateCity(e)}/>
      </div>
      <div className="form-group">
        <label htmlFor="state" className="control-label" value={state}>
          State / Province / Region
        </label>
        <select id="state" name="state" className="form-control" value={state} onChange={e => props.updateState(e)}>
          <option></option>
          {states.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
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
          value={zipCode}
          onChange={e => props.updateZip(e)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        <select id="country" name="country" className="form-control" value={country} onChange={e => props.updateCountry(e)}>
          <option></option>
          {countries.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-primary" onClick={props.update}>
        Submit
      </button>
    </form>
  );
}

AddressForm.propTypes = {
  setDisplayResults: PropTypes.func.isRequired,
  // And others that you will need to pass in
  values: PropTypes.array.isRequired,
  addInfo: PropTypes.func.isRequired,
  updateFirstName: PropTypes.func.isRequired,
  updateLastName: PropTypes.func.isRequired,
  updateAddress: PropTypes.func.isRequired,
  updateCity: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  updateZip: PropTypes.func.isRequired,
  updateCountry: PropTypes.func.isRequired

};

export default AddressForm;
