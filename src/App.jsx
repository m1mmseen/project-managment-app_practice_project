import Sidebar from "./components/Sidebar.jsx";
import {useState} from "react";
import NewProject from "./components/NewProject.jsx";
import Fallback from "./components/helper/Fallback.jsx";

export default App;

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

    const handleAddProject = (newProject) => {
        setProjectState((prevState) => ({
            ...prevState,
            projects: [...prevState.projects, newProject]
        }));
    };

    let content;

    if(projectState.selectedProject === undefined) {
        content = <Fallback onAddNewProject={handleStartAddProject}/>
    } else if (projectState.selectedProject === null) {
        content = <NewProject onSubmit={handleAddProject}/>
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <Sidebar onAddNewProject={handleStartAddProject}/>
            {content}
            {projectState.projects.map(project =>  <p>{project.titel}</p>)}
        </main>
    );
}
