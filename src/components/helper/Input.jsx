export default function Input({isTextarea, label, id, onInputChange, ...props}) {
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

    const handleChange = (event) => {
        onInputChange(id, event.target.value)
    }

    return <p className="flex flex-col gap-1 my-4">
        <label
            htmlFor=""
            className="text-sm font-bold uppercase text-stone-500">
            {label}
        </label>

        {isTextarea ?
            (<textarea className={classes} {...props} onChange={handleChange}></textarea>
            ) : (
            <input className={classes} {...props} onChange={handleChange}/>)
        }
    </p>

}
