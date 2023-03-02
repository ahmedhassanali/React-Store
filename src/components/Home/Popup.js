import Modal from "react-bootstrap/Modal";
import './Popup.css'

function Popup(props) {
  console.log(props);
  
    return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton className="header">
        <Modal.Title id="contained-modal-title-vcenter">           
            Our rays
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {props.data.map((item)=>(
            <button className="image-button" key={item.id}>
                <img src={item.image} alt=""/>{item.title}
            </button>    
        )
        )}
        
      </Modal.Body>
    </Modal>
    );
}

export default Popup;
