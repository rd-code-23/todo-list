import React from "react"
import "../App.css"
import TaskList from './TaskList.jsx'
import TaskForm from './TaskForm.jsx'
import Header from './Header.jsx'
import TaskListContextProvider from '../context/TaskListContext.jsx'
function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
