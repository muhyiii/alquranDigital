import React from "react";
import { Link } from "react-router-dom" 

function Artikel(props) {
  
  return (
    <div>
      <Link to={`/alquran/${props.nomor}`} className="border lg:p-5 p-2 grid-cols-3 grid lg:grid-cols-6 my-3">
        <h1 className="lg:text-4xl">{props.nomor}</h1>
        <div className="lg:col-start-2 lg:col-end-4 ">
          <h1 className="lg:text-3xl text-lg">{props.nama}</h1>
          <h1>{props.arti}</h1>
        </div>
        
        <h2 className="lg:text-5xl col-start-5 col-end-6 text-center font-serif   ">{props.asma}</h2>
      
      </Link>
    </div>
  );
}

export default Artikel;
