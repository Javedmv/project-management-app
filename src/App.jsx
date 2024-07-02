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

      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevState,
        selectedProject: undefined,
        project:[...prevState.projects, newProject]
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
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
