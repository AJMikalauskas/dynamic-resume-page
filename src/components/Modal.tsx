import React from 'react';
import ReactDom from 'react-dom';
import CSS from 'csstype';

const MODAL_STYLES: CSS.Properties = {
    position: 'fixed',
    top: '50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES: CSS.Properties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .6)',
    zIndex: 1000
}

type Props = {
    open: boolean,
    children?: React.ReactNode,
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void,
    templateName: string
}
//const modalRoot = document.getElementById("portal") as HTMLElement;

const Modal = ({open, children, onClose, templateName}: Props) => {
    // el: HTMLElement = document.createElement("div");
    if(!open) return null
  return ReactDom.createPortal(
    <>
    <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
            {/* <button onClick={onClose}>Close Modal</button> */}
            {children}<br/>
            <button onClick={onClose} className={`text-center bg-red-400 p-2 mt-4 ${templateName === "Facebook" ? "ml-4": templateName === "Google" || templateName === "Microsoft" ? "ml-8" : ""}`}>Close Modal</button>
        </div>
    </div>
    </>,
    document.getElementById('portal') as HTMLElement
  )
}

export default Modal