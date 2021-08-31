import React from "react";
import axios from "axios";
import Ayatnya from "../komponen/tampilan";
import Surat from "../halaman";
import { useParams } from "react-router-dom";
// import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

export default function Ayat() {
    let {slug} = useParams()
  const [users, setUsers] = React.useState([]);
  //   const [surat, setSurat] = React.useState();
  const getAyat = async () => {
    const url = ` https://al-quran-8d642.firebaseio.com/surat/${slug}.json?print=pretty`;
    try {
      let response = await axios.get(url);

      console.log(response.data);
      setUsers(response.data);
    } catch {
      console.log("error");
    }
  };
  
  getAyat();
  return (
    <div className="border-4 py-5">
      <div className="border-2 my-3 py-7 mx-3 lg:mx-8 lg:px-7 lg:gap-x-7   shadow-2xl rounded-lg">
        {users.map((artikel, index) => (
          <Ayatnya
         
          nomor = {artikel.nomor}
            ar={artikel.ar}
            id={artikel.id}
          ></Ayatnya>
        ))}
      </div>
    </div>
  );
}
