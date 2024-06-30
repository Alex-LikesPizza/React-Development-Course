import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectSidebar";

function App() {
  const [ pageSelected, setPageSelected] = useState("default"); // default | new-project
  const [ projects, setProjects ] = useState([]);

  function handleNewProject({title, description, date}){
    title = title.trim();
    description = description.trim();
    if(title === ""){
      alert("Please add a valid title");
      return;
    }
    if(description === ""){
      alert("Please add a valid description");
      return;
    }
    setProjects([
      ...projects,
      {
      title,
      description,
      date
      }
    ]);
    setPageSelected("default");
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSidebar setPageSelected={setPageSelected}/>
      {pageSelected === "default" && <NoProjectSelected setPageSelected={setPageSelected}/>}
      {pageSelected === "new-project" && <NewProject handleNewProject={handleNewProject} setPageSelected={setPageSelected}/>}
    </main>
  );
}

export default App;
