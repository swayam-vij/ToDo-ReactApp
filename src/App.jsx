import React, { useState } from "react";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-black to-gray-500 justify-center items-center p-4">
      <div className="max-w-md mx-auto mt-8 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-black">To-Do List</h1>
        <div className="mb-4 flex">
          <input
            className="flex-grow mr-2 p-2 border border-gray-300 rounded text-black"
            type="text"
            placeholder="Enter To-Do Task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <ul className="mt-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between mb-2 px-4"
            >
              <span className="text-black">{task}</span>
              <div>
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => moveTaskUp(index)}
                >
                  Up
                </button>
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => moveTaskDown(index)}
                >
                  Down
                </button>
                <button
                  className="text-red-500"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
