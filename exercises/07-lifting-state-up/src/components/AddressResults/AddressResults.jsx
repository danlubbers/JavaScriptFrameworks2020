import React from "react";
import PropTypes from "prop-types";
/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 */
function AddressResults(props) {
  console.log('Results: ', Object.values(props.values))
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">
        {
        props.values.map((e, i) => {
          return (
            <div key={i}>
              <li><strong>First Name:</strong> {e.firstName}</li>
              <li><strong>Last Name:</strong> {e.lastName}</li>
              <li><strong>Address:</strong> {e.address}</li>
              <li><strong>City:</strong> {e.city}</li>
              <li><strong>State:</strong> {e.state}</li>
              <li><strong>ZipCode:</strong> {e.zipCode}</li>
              <li><strong>Country:</strong> {e.country}</li>
          </div>
          )
        })
      }
      </ul>
    </div>
  );
}

export default AddressResults;

AddressResults.propTypes = {
  values: PropTypes.array.isRequired
};