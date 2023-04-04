import React from 'react'
import {CheckCircleFill} from 'react-bootstrap-icons'

function SuccessMessage(props) {
    //the Modal Component displays the Modal with the below written message , when the user clicks on the Save resume button and downloads it successfully on its computer//
  return (
    <div >
        <div className={(props.showModal) ? 'modal block d-flex align-items-center' :'modal'} >
            <div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title " style={{color:"blue",padding:"3px 170px"}}><CheckCircleFill/></h5>
                        
                    </div>
                    <div className="modal-body">
                        <p style={{color:"blue",padding:"5px",fontSize:"18px"}}>Your Resume has been successfully downloaded!!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" 
                            onClick={()=>{props.setShowModal(false)}}
                        >
                            Close
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessMessage
