import {useRef} from "react";
import Input from "./helper/Input.jsx";
import Button from "./helper/Button.jsx";

export default function NewProject({ onSubmit }) {
    const projectName = useRef();

    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-700 hover:text-stone-950">Cancel</button></li>
            <li><Button>Save</Button></li>
        </menu>
        <form>
            <Input type="text" label="titel"/>
            <Input isTextarea label="description"/>
            <Input type="date" label="Due Date"/>
        </form>
    </div>
}
