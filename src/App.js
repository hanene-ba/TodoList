import React from "react";
import TaskListContextProvider from "./context/TaskListContext";
import TaskList from "./context/TaskList";
import TaskForm from "./context/TaskForm";
import "./App.css";
import Header from "./context/Header";

const App = () => {
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
};

export default App;
