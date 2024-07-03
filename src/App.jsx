import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from './components/NewProject';
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectState] = useState({selectedProject:undefined, projects:[]})

  function handleStartAddProject(){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState((prevState) => {
      const projectId = Math.random()
      
      const newProject = {
        ...projectData,
        id:projectId
      }

      return {
        ...prevState,
        selectedProject: undefined,
        projects:[...prevState.projects, newProject]
      }
    })
  }

  let content;

  if(projectsState.selectedProject === null){
    content = <NewProject onAdd={handleAddProject}/>
  }else if(projectsState.selectedProject === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
