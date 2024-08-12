import Sidebar from "./components/Sidebar.jsx";
import {useState} from "react";
import NewProject from "./components/NewProject.jsx";
import Fallback from "./components/helper/Fallback.jsx";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProject: undefined,
        projects: []
    });

    function handleStartAddProject({selectedProject, value}) {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProject: null,
            }
        })
    }

    function handleAddNewProject({projectName}) {
        console.log("arrives");
        setAddProjectClicked(false);
        console.log(projectName);
    }

    let content;

    if(projectState.selectedProject === undefined) {
        content = <Fallback onAddNewProject={handleStartAddProject}/>
    } else if (projectState.selectedProject === null) {
        content = <NewProject/>
    }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddNewProject={handleStartAddProject} onSubmit={handleAddNewProject}/>
        {content}
    </main>
  );
}

export default App;
