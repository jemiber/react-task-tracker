//Main root component

//import React from "react"; //This is necessary if we are using classes, otherwise its not
import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 6th at 1:30pm',
      reminder: false,
    }
  ])

  //Function to delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />) : (
        'No tasks to show'
      )}
    </div>
  );
}

//This next code is doing the same as the above code but is using class instead
/*
class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}
*/
export default App;

/*
The ternary in the return says: if there are no tasks to show,
show 'No tasks to show'
*/