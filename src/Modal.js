import React, { useEffect, useRef } from 'react';
import {createPortal} from 'react-dom';


const Modal = ({ children }) => {
  //useRef wil allow you to cleanup by always referring to the same dom element
  const elRef = useRef(null);
  //if there is no current elRef div, create one
  if (!elRef.current) {
    const div = document.createElement('div')
    elRef.current = div;
  }
  
  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    modalRoot.appendChild(elRef.current)
    //in useEffect if you return a FUNCTION then that is the cleanup
    return () => modalRoot.removeChild(elRef.current);
  }, [])

  return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal;