import React from "react";


function Ayatnya(props) {
  return (
    <div>
        
      <article className="grid grid-cols-8 px-4 mx-2 ">
        <h1 className="text-4xl  mt-10">{props.nomor}</h1>
        <div className="col-start-2 col-end-9  mt-10     ">
          <h1 className="text-3xl mb-5 text-right">{props.ar}</h1>
          <h1>{props.id}</h1>
        </div>
      </article>
    </div>
  );
}

export default Ayatnya;
