// experimenting with react hooks
import React, { useState } from 'react';
import './App.css'

function Todo({ todo, index, completeTodo })  {
  return(
    <div style={{textDecoration: todo.isCompleted ? "line-through" : "" }}
    className="todo">{todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
    </div>
    </div>
  )
}

// this form needs state
function TodoForm({ addToto }){
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addToto(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      className="input" 
      value={value} 
      placeholder="Add Todo..."
      onChange={e => setValue(e.target.value)} />
    </form>
  )
}

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

  const addToto = (text) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  };

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo}/>
          ))}
          <TodoForm addToto={addToto}/>  
      </div>
    </div>

  );
}

export default App;