import Button from "./helper/Button.jsx";
import {useState} from "react";

export default function Sidebar({projects, onAddNewProject, onSelect, selectedId}) {


    return <aside className="sidebar">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
        <div>
            <Button
                onClick={onAddNewProject}
            >+ Add New Project</Button>
        </div>
        <div>
            <ul className="mt-8 rounded">
                {projects.map((project) => {
                    let classes = "w-full flex justify-between text-left p-4 rounded-md my-1 hover:text-stone-200 bg-stone-700 hover:bg-stone-800";

                    if(project.id === selectedId) {
                        classes += ' bg-stone-500 text-stone-200'
                    } else {
                        classes += ' text-stone-400'
                    }

                    return (
                        <li key={project.id}>
                            <button className={classes} onClick={() => onSelect(project.id)}>
                                <strong>{project.projectName}</strong> {new Date(project.projectDueDate).toLocaleDateString('de-DE', {year: 'numeric', month: 'short', day: 'numeric'})}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    </aside>
}
