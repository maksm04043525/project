import React from "react";

const MyModal = ({children, visible, setVisible})=> {
    return(
    <div id="modal1" className={visible ? 'modal show-on-large z-up': 'modal'}>
        <div className="modal-content">
            <h4>Modal Header</h4> 
            {children}
        </div>
        <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat"
                    onClick={()=>setVisible(false)}>
                Agree
            </a>
        </div>
    </div>
    )
}

export default MyModal
