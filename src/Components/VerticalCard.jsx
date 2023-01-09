import React from 'react'
import { NavLink } from "react-router-dom";



export function VerticalCard(props) {

  return (
    <NavLink to="/nextPage" className="text-decoration-none text-dark d-flex vertical-card boxx">
        <img src={props.img} alt="" height="200px" width="328px" className="card-img"/>
        <div className="ver-box">
           <h3 >{props.title}</h3>
           <p className="text-muted lh-sm">{props.details} </p>
           <p className="mx-4">
           <span className="fw-bold">{props.type} : </span>{props.date}
        </p>
      </div>
    </NavLink>
  )
}


function VerticalSmallCard(props) {
  return (
    <NavLink  to="/nextPage" className="text-decoration-none text-dark d-flex vertical-sm-card ">
    <img src={props.img} alt="" height="200px" width="250px" className="hori-sm-img"/>
    <div className="ver-sm-box">
      <h3 >{props.title}</h3>
      <p className="text-muted lh-sm"> {props.details} </p>
      
      <p className="mx-4">
        <span className="fw-bold">{props.type} : </span>{props.date}
     </p>
   </div>
 </NavLink>
  )
}

export default VerticalSmallCard
