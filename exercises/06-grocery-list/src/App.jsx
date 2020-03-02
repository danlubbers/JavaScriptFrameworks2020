import React, { useState } from 'react';
import './App.css';

const GroceryList = () => {
  /**
   * @constant {array} gorceryList array of nested objects, where each object represents something in a list
   * @example
   * [
   *    {
   *      name: "bananas",
   *      cost: 2.99
   *    },
   *    {
   *      name: "apples",
   *      cost: 1.99
   *    }
   * ]
   */
  const [groceryList, setGroceryList] = useState([]);
  /**
   * @constant name what the user is typing in the "Name of grocery item..." textbox
   */
  const [name, setName] = useState("");
  /**
   * @constant name what the user is typing in the "Cost of grocery Item..." textbox
   */
  const [cost, setCost] = useState("");
  /**
   * @constant hasError whether or not to display the "Both fields are required." error
   */
  const [hasError, setHasError] = useState(false);

  const addToList = () => {
    /**
     * Adds new item and cost to groceryList
     */
    setGroceryList([...groceryList, 
      {
        name, 
        cost: +cost // Converts string to number to prevent TypeErrors with calcTotal()
      }
    ]);
    setName(''); // clears state
    setCost('') // clears state
  };

  const deleteFromList = indexToDelete => {
    setGroceryList([...groceryList].filter((e, i) => i !== indexToDelete))
  };

  const clearList = () => setGroceryList([]);

  const calcTotal = () => {
    return groceryList.reduce((acc, currVal) => acc + currVal.cost, 0);
  };

  const handleSubmit = e => {
    e.preventDefault();
    /**
     * If both the grocery name and cost are filled out
     */
    if(name && (cost || cost === 0)) {
      addToList();
      setHasError(false);
    } else {
      setHasError(true) // both fields are required
    }
  }

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Name of grocery item..."
            aria-label="Name of grocery item..."
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className="form-control"
            type="number"
            min="0"
            step=".01"
            placeholder="Cost of grocery Item..."
            aria-label="Cost of grocery Item..."
            value={cost}
            onChange={e => setCost(parseFloat(e.target.value))}
          />
          <div>
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
        {hasError && (
          <p className="help-block text-danger">Both fields are required.</p>
        )}
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-compact">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/**
             * Complete me. (You can use something else instead of a table if you like)
             * @example
             * <tr>
             *   <td>Toilet Paper</td>
             *   <td>$1.99</td>
             *   <td>
             *     <button aria-label="Delete" title="Delete" ... >
             *       &times;
             *     </button>
             *   </td>
             * </tr>
             */}
            {groceryList.map((item, index) => {
              return (
                <tr key={`item-${item}`}>
                  <td>{item.name}</td>
                  <td>${item.cost.toFixed(2)}</td>
                  <td>
                    <button
                      aria-label="Delete"
                      title="Delete"
                      className="btn"
                      onClick={() => deleteFromList(index)}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${calcTotal().toFixed(2)}</strong>
        </p>
        <div className="text-right">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={clearList}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );


};

export default GroceryList;