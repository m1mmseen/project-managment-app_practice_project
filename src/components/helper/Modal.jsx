import {createPortal} from "react-dom";
import {forwardRef, useImperativeHandle, useRef} from "react";
import Button from "./Button.jsx";

const Modal =forwardRef(function Modal({children, buttonCaption}, ref) {
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });

    return createPortal(<dialog ref={dialog} className="w-1/3 backdrop:bg-stone-900/80 p-4 rounded-sm shadow-md">
        {children}
        <form method="dialog">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>, document.getElementById("modal-root"))

    }
)




export default Modal;
