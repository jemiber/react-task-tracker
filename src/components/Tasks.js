/*import { useState } from "react" //this is a hook from react to add state, we are going to move this to App.js*/
import { Task } from "./Task"

export const Tasks = ({ tasks, onDelete }) => {
  /* const [tasks, setTasks] = useState ([
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
*/

//Pasing the single Task component as a prop
    return (
    <>
    {tasks.map((task) => (
        <Task key={task.id} task={task} 
        onDelete={onDelete} />
        ))}
    </>
  )
}

export default Tasks

/*
the variable tasks is now part of our component state
if we want to change any part of the state we use setTask
state is immutable it's not something that we can directly change
so we cant do something like 'tasks.push()'
we have to recreate the state and send it down because it's a one-way data
so to change it we would use setTask([]) in the return and inside the []
we make our changes, for ex: setTask([...tasks])

The array above is going to be moved to App.js to make it our global state,
that way we are going to be able to pass it down to components that we want
as props. If we didn't do that we would only be able to use it in components 
we embed in here.
*/
