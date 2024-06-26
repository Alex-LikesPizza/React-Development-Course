import { createPortal } from 'react-dom';
import { useRef, forwardRef, useImperativeHandle } from 'react';
import Button from './Button';
const Modal = forwardRef(function({children, buttonCaption}, ref){
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open(){
        dialogRef.current.showModal();
      }
    }
  })
  return createPortal(
    <dialog className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md' ref={dialogRef}>
      {children}
      <form method="dialog" className='mt-4 text-right'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>, document.getElementById("modal-root"));
});

export default Modal;