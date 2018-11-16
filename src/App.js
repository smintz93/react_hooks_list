// experimenting with react hooks
import React, { useState } from 'react';
import './App.css'

function Todo({ todo, index, completeTodo, deleteTodo })  {
  return(
    <div style={{textDecoration: todo.isCompleted ? "line-through" : "" }}
    className="todo">{todo.text}<li>{todo.gift}</li>
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => deleteTodo(index)}>x</button>
    </div>
    </div>
  )
}

// this form needs state
function TodoForm({ addTodo }){
  const [text, setText] = useState('')
  const [gift, setGift] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit is being called')
    if(!text || !gift) return;
    addTodo(text, gift);
    setText('');
    setGift('');
  }

  return (
    <form>
      <input type="text" 
      className="input" 
      value={text} 
      placeholder="Add Todo..."
      onChange={e => setText(e.target.value, console.log(e.target.value, "This is text value"))} />
      <input type="text" 
      className="input" 
      value={gift} 
      placeholder="Add Gift..."
      onChange={e => setGift(e.target.value, console.log(e.target.value, "this is gift value"))} />
    <button onClick={handleSubmit}>Add to List</button>
    </form>

  )
}

function App(){
  const [todos, setTodos] = useState([
    { text: "Jeff",
      gift: "tv",
      isCompleted: false 
    },
    { text: "Zach",
      gift: "tv",
      isCompleted: false 
    },
    { text: "Jake",
      gift: "tv",
      isCompleted: false 
    }
  ]);

  const addTodo = (text, gift) => {
    const newTodos = [...todos, { text, gift }]
    setTodos(newTodos)
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
     const newTodos = [...todos];
     newTodos.splice(index, 1);
     setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Christmas List</h1>
      <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
          ))}
          <TodoForm addTodo={addTodo}/>  
      </div>
    </div>

  );
}

export default App;