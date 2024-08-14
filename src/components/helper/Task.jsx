export default function Task({taskName, taskId, onDelete}) {
    return <>
        <li className="flex justify-between gap-5" key={taskId}>
            <p>{taskName}</p>
            <b onClick={() => onDelete(taskId)} className="text-stone-700 hover:text-red-500">Delete</b>
        </li>
    </>
}
