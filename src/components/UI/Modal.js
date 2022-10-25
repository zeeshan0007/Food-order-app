import {Fragment} from "react";
import ReactDOM from "react-dom";

import classes from './Modal.module.css';


const Backdrop = props =>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay= props =>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalLocation=document.getElementById('overlays')

const Modal = props => {
    return<Fragment>
        {ReactDOM.createPortal( <Backdrop onClose={props.onClose}/>, portalLocation)}
        {ReactDOM.createPortal( <ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
    </Fragment>
}
export default Modal;


//we can do this but this will have the duplicate code in the project to avoid this we use portals
// return<Fragment>
//     <Backdrop/>
//     <ModalOverlay>{props.children}</ModalOverlay>
// </Fragment>