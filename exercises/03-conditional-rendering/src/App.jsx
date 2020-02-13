import React from "react";
import Todo from './components/todos';
import { todos } from './data/todos';

function App() {
  return ( 
    <div className="App">
      <Todo todos={todos} showCompleted={false} />
    </div>
  )
}

export default App;
