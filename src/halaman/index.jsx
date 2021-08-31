import React from "react";
import axios from "axios";
import Artikel from "../komponen/surat";
// import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

export default function Surat() {
  const [users, setUsers] = React.useState([]);
  //   const [surat, setSurat] = React.useState();
  const getSurat = async () => {
    const url = ` https://al-quran-8d642.firebaseio.com/data.json?print=pretty`;
    try {
      let response = await axios.get(url);

      
      setUsers(response.data);
    } catch {
      console.log("error");
    }
  };
  getSurat();
  return (
    <div className="border-4 py-5">
      <div className="border-2 my-3 py-7 mx-2 lg:mx-8 lg:px-7 px-4 gap-x-7 grid   shadow-2xl rounded-lg">
        {users.map((artikel, index) => (
          <Artikel
            nama={artikel.nama}
            asma={artikel.asma}
            arti = {artikel.arti}
            nomor={artikel.nomor}
            audio = {artikel.audio}
            slug = {artikel.slug}
          ></Artikel>
        ))}
      </div>
    </div>
  );
}
