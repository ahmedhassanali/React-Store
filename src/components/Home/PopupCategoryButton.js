

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Popup from './Popup';
import { fetchCategories } from "../../rtk/slices/CategorySlice";

function PopupButton(props) {

      const categories = useSelector(state => state.categories);
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchCategories());
      }, []);


    const [modalShow, setModalShow] = useState(false);
    return (
      <>
        <Button variant="light" onClick={() => setModalShow(true)}> <img src={props.image} className="icon" alt=""/>{props.text}</Button>
        <Popup show={modalShow} onHide={() => setModalShow(false)} data={categories}/>
      </>
    );
      
}
  export default PopupButton;