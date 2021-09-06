 

 
import React, { Component } from 'react';
import {   Button } from 'bootstrap'

import Modal from "react-bootstrap/Modal"

export default class ModifyandCancel extends Component {
    constructor(props) {
        super(props);
        console.log("location", this.props);
        this.state = {
           showButtons: false
        }
      }

      showButtons1 = () => {
          this.setState ({
            showButtons: true
          })
    }

 

  render() {
    return (
       <Modal
     {...this.props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
   {console.log(this.props)}
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         Booking Confirmation Number
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>
     <div>
     <div class="text-center">
      <button type="button" class="btn btn-primary" onClick = {this.showButtons1}>Done</button>   
      </div>
      {this.state.showButtons && <div class="form-group">
                <button class="btn btn-primary float-left"
                        type="submit">
                     Modify
                </button>

                <button class="btn btn-primary float-right" style = {{float: "right"}}
                        type="submit" onClick={this.props.onHide} >
                     Cancel
                </button>
            </div>
   }
        </div>
        
     </Modal.Body>
     <Modal.Footer>
       <button className="btn btn-primary" onClick={this.props.onHide } >Close</button>
     </Modal.Footer>
   </Modal>
    );
  }
}
