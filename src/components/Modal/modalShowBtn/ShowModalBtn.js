import React from 'react'
import './ModalBtn.css'
import PropTypes from "prop-types";

 const ShowModalBtn=  (props)=> {

     
    return <button className="circle circle__add" onClick = {props.onClick}></button>;
}

 ShowModalBtn.propTypes = {
    onClick: PropTypes.func,
}
export default ShowModalBtn
