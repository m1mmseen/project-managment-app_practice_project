import Sidebar from "./components/Sidebar.jsx";
import {useState} from "react";
import NewProject from "./components/NewProject.jsx";
import Fallback from "./components/helper/Fallback.jsx";
import Project from "./components/Project.jsx";

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

    const handleAddProject = (newProjectData) => {
        const newProject = {
            ...newProjectData,
            id: Math.random()
        }
        setProjectState((prevState) => ({
            selectedProject: undefined,
            projects: [...prevState.projects, newProject]
        }));
    };

    const handleCancelAddProject = () => {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProject: undefined,
            }
        })
    }

    const handleProjectSelected = (index) => {

        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProject: index,
            }
        })
    }

    const handleDeleteProject = () => {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProject: undefined,
                projects: prevState.projects.filter(
                    (project) => project.id !== prevState.selectedProject
                ),
            };
        });
    }

    const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProject);

    let content;

    if(projectState.selectedProject === undefined) {
        content = <Fallback onAddNewProject={handleStartAddProject}/>
    } else if (projectState.selectedProject === null) {
        content = <NewProject onSubmit={handleAddProject} onCancel={handleCancelAddProject}/>
    } else if (projectState.selectedProject) {
        content = <Project project={selectedProject} onDelete={handleDeleteProject}/>
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <Sidebar onAddNewProject={handleStartAddProject} projects={projectState.projects} onSelect={handleProjectSelected} selectedId={projectState.selectedProject}/>
            {content}
        </main>
    );
}
