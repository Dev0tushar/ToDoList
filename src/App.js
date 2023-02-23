import React, { useEffect, useState } from 'react';
import ToDoForm from './Components/AddTodo';
import ToDoList from './Components/ClearTodo';
import './App.css'
//mock data
// import data from "./data.json";



function App() {

  // const [toDoList, setToDoList] = useState(data);

  const [toDoList, setToDoList] = useState(() => {

    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoList));
  }, [toDoList]);



  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  const handleChange = (newValue, id) => {
    // console.log(id+"")
    let editVal = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, task: newValue } : { ...task };
    });
    console.log(newValue, "edit");
    setToDoList(editVal);

  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    if (userInput) {
      let copy = [...toDoList];

      copy = [...copy, { id: toDoList.length, task: userInput, complete: false }];
      console.log(copy, "todo list appjs")
      setToDoList(copy);
    } else {
      alert("please enter task")
    }
  }


  return (
    <div className="App">
      <div className='todo-box'>
        <h1>
          To Do List
        </h1>
        <ToDoForm addTask={addTask} />
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleChange={handleChange} handleFilter={handleFilter} />
      </div>
    </div>
  );
}

export default App;

