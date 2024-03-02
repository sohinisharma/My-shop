import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.css'

const MyModalComponent = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
    <div className='btn-signup'>
      <Button variant="primary" onClick={handleShow}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="modal-body">
            <div className="container">
              <h2 className='heading2'>REGISTER FOR DEMO</h2>
              <div className='modalbox'>
                  <input type="text" placeholder="Name" className="form-control" />
                  <input type="text" placeholder="Email" className="form-control" />
                  <input type="text" placeholder="Mobile No" className="form-control" />           
                  <select className="form-select" id="sel1" name="sellist1">
                      <option>Course Applied For</option>
                      <option>SAP TRAINING</option>
                      <option>JAVA TRAINING</option>
                      <option>WEB DESIGNING</option>
                      <option>WEB DEVELOPMENT</option>
                      <option>DIGITAL MARKETING</option>
                      <option>NET TRAINING</option>
                      <option>PYTHON</option>
                      <option>ORACLE TRAINING</option>
                      <option>ANDROID MOBILE APPLICATION</option>
                      <option>PHP TRAINING</option>
                      <option>LINUX</option>
                      <option>WEB NETWORKING</option>
                      <option>CLOUD COMPUTING</option>
                      <option>C & C++</option> 
                      <option>others</option>               
                    </select>   
                                          
                  <textarea name="" id="" placeholder='Message' className='msg'/>
                  <button className='btn-submit'> SUBMIT</button>
              </div>
          </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default MyModalComponent;


