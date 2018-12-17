import React from "react";
import "./Card.css";

const Card = props => (

<div className="col-sm-3" onClick={(event) => props.handleClick(event, props.id)} style={{width: '150px'}}>
  <figure className="figure">
  <img src={props.image} className="figure-img img-fluid rounded" alt={props.name} style={{width: "150px", height: "225px"}}/>
</figure>
</div>

);

export default Card;