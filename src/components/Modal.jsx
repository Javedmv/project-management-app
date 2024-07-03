import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(({children, buttonCaption}, ref) => {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
                //showModal is provided by dialog element
            }
            // open is meathod provided by our component to other components.
        }
    })

    return createPortal(
        <dialog ref={dialog}>
            {children}
            <form method="dialog"><button>{buttonCaption}</button></form>
        </dialog>
    ),
    document.getElementById('modal-root')
})

export default Modal;