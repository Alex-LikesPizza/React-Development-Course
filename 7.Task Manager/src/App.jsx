import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [ pageSelected, setPageSelected] = useState("default"); // default | new-project
  const [ projects, setProjects ] = useState([]);

  function handleNewProject(data){
    setProjects([
      ...projects,
      {
        ...data,
        id: Math.floor(Math.random() * 100_000_000),
      }
    ]);
    setPageSelected("default");
  }
  const isProject = pageSelected.charAt(0) === '~';
  const projectId = isProject && parseInt(pageSelected.slice(1));
  const project = isProject && projects.find((project) => project.id === projectId);
  

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSidebar projects={projects} setPageSelected={setPageSelected}/>
      {pageSelected === "default" && <NoProjectSelected setPageSelected={setPageSelected}/>}
      {pageSelected === "new-project" && <NewProject handleNewProject={handleNewProject} setPageSelected={setPageSelected}/>}
      {isProject && <SelectedProject setProjects={setProjects} setPageSelected={setPageSelected} project={project}></SelectedProject>}
    </main>
  );
}

export default App;
