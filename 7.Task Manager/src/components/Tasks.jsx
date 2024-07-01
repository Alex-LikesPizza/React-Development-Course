import Modal from "./Modal";
import NewTask from "./NewTask"
import { useRef, useState } from "react";
export default function Tasks() {
  const [ task, setTask ] = useState("");
  const [ tasks, setTasks ] = useState([]);
  const modalRef = useRef();
  function handleChange(e){
    setTask(e.target.value);
  }
  function handleAddTask(){
    if(!task.trim()) {
      modalRef.current.open();
      return;
    }
    setTasks(pervTasks => [...pervTasks, {id: Math.floor(Math.random() * 100_000_000), value: task}]);
    setTask("");
  }
  function handleDeleteTask(taskId){
    setTasks(pervTasks => pervTasks.filter((prevTask) => prevTask.id !== taskId));
  }

  return (
    <section>
      <Modal buttonCaption="Close" ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Task</h2>
        <p className="text-stone-600 mb-4">Please provide a valid value for the task</p>
      </Modal>

      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask handleAddTask={handleAddTask} handleChange={handleChange} task={task}/>
      {tasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
      {tasks.length !== 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task) => <li key={task.id} className="flex justify-between my-4">
          <span>{task.value}</span>
          <button className="text-stone-700 hover:text-red-500" onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>)}
      </ul>}
    </section>
  )
}