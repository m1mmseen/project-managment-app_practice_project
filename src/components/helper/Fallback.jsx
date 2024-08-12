import noProjectImage from '../../assets/no-projects.png'
import Button from "./Button.jsx";

export default function Fallback({onAddNewProject}) {
    return <div className="mt-24 text-center w-2/3">
        <img className="w-24 h-24 object-contain mx-auto" src={noProjectImage} alt=""/>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <p>
            <Button onClick={onAddNewProject}>+ Add New Project</Button>
        </p>
    </div>
}
