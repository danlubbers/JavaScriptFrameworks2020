import React, { useState, useEffect } from "react";
import "./App.css";

const GroceryList = () => {
  const [list, setList] = useState([
    ['Avocado', 2.50], 
    ['Juice', 5.00]
  ]);
  const [item, setItem] = useState('');
  const [cost, setCost] = useState('');
  const [isValid, setIsValid] = useState(true);
  
  const deleteItem = index => {
    console.log(index)
    setList(
      list.filter((item, currentIndex) => currentIndex !== index)
      );
  }

  const handleSubmit = e => {
    e.preventDefault();
    setList([...list, [item, cost]]);


   const elements = [...e.target.elements].filter(e => {
     return e.matches('input');
   })
   console.log(elements)

   
   elements.forEach(e => {
     if(e.value) {
       e.classList.remove('error')
     } else {
      setIsValid(false)
       e.classList.add('error')
     }
   })
   if(!isValid) return;
  }

 
  useEffect(() => {
    console.log(list)
  }, [list])

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Name of grocery item..."
            aria-label="Name of grocery item..."
            value={item}
            onChange={e => setItem(e.target.value)}            
            />
          <input
            className="form-control"
            type="number"
            min="0"
            step=".01"
            placeholder="Cost of grocery Item..."
            aria-label="Cost of grocery Item..."                
            onChange={e => setCost(e.target.value)}                   
          />
          <div>
            <button type="submit" className="btn btn-success" >
              Add
            </button>
          </div>
        </form>
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
                {list.map((item, index) => {
                  return (
                      <tbody>
                        <tr key={index}>
                          <td>{item[0]}</td>
                          <td>${item[1]}</td>
                          <td>
                            <button aria-label='Delete' title='Delete' onClick={() => deleteItem(index)}>&times;</button>
                          </td>
                        </tr>
                      </tbody>                    
                  )
                })}
        </table>
        <p className="lead">
          <strong>Total Cost: 
            {` $${list.reduce((acc, curr) => acc + +curr[1], 0).toFixed(2)}`} 
          </strong>
        </p>
        <div className="text-right">
          <button type="button" className="btn btn-outline-success" onClick={_=> setList([])}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
