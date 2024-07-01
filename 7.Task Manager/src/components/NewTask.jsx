
export default function NewTask({handleChange, task, handleAddTask}){

  return (
    <div className="flex items-center gap-4">
      <input value={task} onChange={handleChange} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" />
      <button onClick={handleAddTask} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  )
}