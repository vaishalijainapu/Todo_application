// App.js

import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Provider } from "react-redux";
import store from "./components/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Simple To-Do Application</h1>
        <TaskInput></TaskInput>
        <TaskList></TaskList>
      </div>
    </Provider>
  );
}

export default App;
