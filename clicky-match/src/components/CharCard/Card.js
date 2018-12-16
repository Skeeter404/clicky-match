import React from "react";
import "./Card.css";

const Card = props => (

<div onClick={() => props.handleClick(props.id)} className="card" style="width: 18rem;">
  <figure class="figure">
  <img src={props.image} className="figure-img img-fluid rounded" alt={props.name}/>
</figure>
</div>

);

export default Card;