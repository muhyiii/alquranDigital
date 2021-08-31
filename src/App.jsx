import React from "react";
import Surat from "./halaman";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Atas from "./komponen/atas";
import Artikel from "./komponen/surat";
import NewsDetail from "./komponen/tampilan";
import Ayat from "./surat";

function App() {
  return (
    <React.Fragment>
      <div className='h-full'>
      <BrowserRouter>
        <Switch>
          <Route exact   path="/alquran" exact>
            <Atas></Atas>
            <div className="divide-solid text-center text-3xl ">
              Surat - Surat
            </div>
            <Surat></Surat>
          </Route>{" "}
          <Route path="/alquran/:slug" exact>
            
            
          <Ayat></Ayat>
          </Route>
          {/* <Route path="/berita/:slug">
            <NewsDetail></NewsDetail>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route> */}
          <Redirect from="*" to="/alquran" />
        </Switch>
      </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
