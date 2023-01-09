import React from 'react'
import { NavLink } from "react-router-dom";
 
 export function HorizontalBigCard(props) {
   return (
    <NavLink to="/nextPage"  className=" text-decoration-none text-dark hori-card">
    <img src={props.img} alt="" height="200px" width="328px" className="card-img"/>
    <div className="hori-box">
        <h3>{props.title} </h3>
        <p className="text-muted lh-sm ">{props.details} </p>
        <p className="mt-5 mx-4">
           <span className="fw-bold">{props.type} : </span>{props.date}
        </p>
    </div>
</NavLink>
   )
 }
 
 
export function CardHead (props){
  return (
    <NavLink to="/nextPage" className="text-decoration-none text-dark mt-3 hori-sm-card">
        <div className="d-flex mx-2 align-items-center">
           <img src={props.img} alt="" height="80px" width="80px" className="mt-3 me-2"/>
           <h4 className="horizontal-head mt-3">{props.title} </h4>
           <span className="num">{props.num} </span>
        </div>
        <p className="my-3 mx-2">
           <span className="fw-bold">{props.type} </span>
           <span className="text-grey"> / {props.date}</span>
        </p>
      </NavLink>
  );
 }
 

export default function HorizontalSmallCard(props) {
  return (
    <div className="hori-sm-card">
    <NavLink to="/nextPage" className=" text-decoration-none text-dark ">
      <img src={props.img} alt="" height="200px" width="325px" className="hori-sm-img"/>
      <div className="d-flex  mx-2">
        <h3 className="horizontal-head mt-3 "> {props.title} </h3>
        <span className="num"> {props.num} </span>
      </div>

      <p className=" mx-2">
        <span className="fw-bold">{props.type} </span>
        <span className="text-grey"> / {props.date}</span>
      </p>
    </NavLink>
  </div>
  )
}






