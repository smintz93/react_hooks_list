// experimenting with react hooks
import React, { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([
    { text: "Learn about React",
      isCompleted: false 
    },
    { text: "Meet friend for lunch",
      isCompleted: false 
    },
    { text: "Build really cool todo app",
      isCompleted: false 
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        
      </div>
    </div>

  );
}

export default App;