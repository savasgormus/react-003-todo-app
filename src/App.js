import './App.css';
import Header from './components/Header';
import {useState} from "react";
import AddTask from './components/AddTask';

function App() {

  // useState'i yukarıda import ediyoruz ve tasklarımızı ekliyoruz.
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      day: "Dec 12th at 2:30pm"
    },
    {
      id: 2,
      text: "Task 2",
      day: "Dec 12th at 2:30pm "
    },
    {
      id: 3,
      text: "Task 3",
      day: "Dec 12th at 2:30pm"
    },
    {
      id: 4,
      text: "Task 4",
      day: "Dec 12th at 2:30pm"
    },
  ]);
  return (
    <div className="App">
      <Header title="TASK TRACKER" />
      <AddTask tasks={tasks}/>
    </div>
  );
}

export default App;
