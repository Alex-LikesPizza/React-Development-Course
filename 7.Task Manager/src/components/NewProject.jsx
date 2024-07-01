import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";

export default function NewProject({setPageSelected, handleNewProject}){
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();
  

  function handleSave(){
    const title = titleRef.current.value;
    const description = descRef.current.value;
    const date = dueDateRef.current.value;

    if(!title.trim() || !description.trim() || !date.trim()){
      modalRef.current.open();
      return;
    }

    const data = {
      title,
      description,
      date,
    }
    handleNewProject(data);
  }

  return (
    <>
      <Modal buttonCaption="Close" ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please provide a valid value for every field</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li><button onClick={() => setPageSelected("default")} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
          <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descRef} label="Description" isTextArea />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  )
}